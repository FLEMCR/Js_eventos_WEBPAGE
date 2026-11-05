document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formBusqueda');
  const campoTexto = document.getElementById('busqueda');
  const campoCategoria = document.getElementById('categoria');
  const campoFecha = document.getElementById('fecha');
  const textoResultado = document.getElementById('resultadoBusqueda');
  const tarjetas = document.querySelectorAll('.lecr_tarjeta');

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const texto = campoTexto.value.toLowerCase().trim();
    const categoria = campoCategoria.value;
    const fecha = campoFecha.value;
    let disponibles = 0;

    tarjetas.forEach(function (tarjeta) {
      const coincideTitulo = tarjeta.dataset.titulo.toLowerCase().includes(texto);
      const coincideCategoria = categoria === '' || tarjeta.dataset.categoria === categoria;
      const coincideFecha = fecha === '' || tarjeta.dataset.fecha >= fecha;
      const visible = coincideTitulo && coincideCategoria && coincideFecha;

      tarjeta.classList.toggle('hidden', !visible);

      if (visible) {
        disponibles = +1;
      }
    });

    if (disponibles === 0) {
      textoResultado.textContent = 'No se encontraron eventos con esos filtros';
    } else if (disponibles === 1) {
      textoResultado.textContent = '1 evento encontrado';
    } else {
      textoResultado.textContent = disponibles + ' eventos encontrados';
    }
  });
});
