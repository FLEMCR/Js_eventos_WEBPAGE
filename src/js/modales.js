class EventoBase {
  precio;

  constructor(datos) {
    const { precio, ...resto } = datos;
    Object.assign(this, resto);
    this.precio = precio;
  }

  get precio() {
    return this.precio;
  }

  set precio(valor) {
    const numero = Number(valor);
    this.precio = numero < 0 ? 0 : numero;
  }

  get tipo() {
    return 'ENTRETENIMIENTO';
  }
}

class EventoMusical extends EventoBase {
  get tipo() {
    return 'MUSICA';
  }
}

class EventoTeatro extends EventoBase {
  get tipo() {
    return 'ARTE Y CULTURA';
  }
}

class EventoDeportivo extends EventoBase {
  get tipo() {
    return 'DEPORTES';
  }
}

const eventosModal = {
  modal_1: {
    titulo: 'Horrorland',
    categoria: 'ENTRETENIMIENTO',
    fecha: '02 de octubre de 2026',
    lugar: 'Circuito Mágico del Agua',
    plataforma: 'Ticketmaster',
    precio: 20,
    descripcion:
      'Este Halloween, atrévete a vivir una experiencia inmersiva donde el miedo, la adrenalina y el suspenso se apoderan de cada paso. Horrorland Dark Experience llega al Circuito Mágico del Agua para transformar la zona Tangüis en un recorrido de terror capaz de desafiar todos tus sentidos.',
    link: 'https://www.ticketmaster.pe/event/circuito-de-horror-horrorland-dark-xperience-2026-venta-general',
  },
  modal_2: {
    titulo: 'Chayanne',
    categoria: 'MUSICA',
    fecha: '02 de diciembre de 2026',
    lugar: 'Estadio Nacional',
    plataforma: 'Ticketmaster',
    precio: 147,
    descripcion:
      'Chayanne vuelve a Lima como parte del cierre de su gira mundial “Bailemos Otra Vez”. Chayanne confirma su segundo regreso a Lima con su exitosa gira mundial “Bailemos Otra Vez”. El ídolo puertorriqueño se presentará el 02 de diciembre en el Estadio Nacional, en un concierto que también promete ser inolvidable.',
    link: 'https://www.ticketmaster.pe/event/chayanne-bailemos-otra-vez-tour-2026-home',
  },
  modal_3: {
    titulo: 'Gorillaz',
    categoria: 'MUSICA',
    fecha: '23 de noviembre de 2026',
    lugar: 'Lurin Live',
    plataforma: 'Ticketmaster',
    precio: 231,
    descripcion:
      'Horas después de haber estrenado su nuevo álbum de estudio, “The Mountain”, Gorillaz anunció que se presentará en Lima por primera vez en su carrera, como parte de un tour que los paseará por el mundo y que hará historia en el Perú, donde son esperados por más de dos décadas.',
    link: 'https://www.ticketmaster.pe/event/pe6gorillaz-659-home-tw-5678',
  },
  modal_4: {
    titulo: 'Marco Antonio Solís',
    categoria: 'MUSICA',
    fecha: '7 de noviembre de 2026',
    lugar: 'Arena 1, San Miguel',
    plataforma: 'Ticketmaster',
    precio: 125,
    descripcion:
      'Marco Antonio Solís es una de las figuras más importantes de la historia de la música latina. Su carrera de cinco décadas como baladista comenzó en los años 70, cuando cofundó la banda grupera mexicana Los Bukis, vendiendo millones de álbumes y presentando conciertos con entradas agotadas en estadios de Estados Unidos y México. Como solista, Solís ha ganado cinco Premios Grammy Latinos, en reconocimiento a sus contribuciones como compositor, arreglista, productor, músico y director artístico. Ha logrado que más de 50 canciones aparezcan en la lista Hot Latin Songs de Billboard, incluyendo más de 10 éxitos número 1. Solís ha colaborado con importantes artistas latinos como Enrique Iglesias, Marc Anthony, Marisela, Raphael, Lucero y Rocío Dúrcal.',
    link: 'https://www.ticketmaster.pe/event/marco-antonio-solis-lima-2026-home',
  },
  modal_5: {
    titulo: 'Robbie Williams',
    categoria: 'MUSICA',
    fecha: '12 de diciembre de 2026',
    lugar: 'Estadio San Marcos',
    plataforma: 'Estadio San Marcos',
    precio: 180,
    descripcion:
      'La estrella inglesa se presentará el sábado 12 de diciembre . En esta su visita, Robbie presentará su nuevo disco en estudio “Britpop” así como sus más grandes éxitos. Lima se suma a las ciudades latinoamericanas donde lo verán en más de una ocasión tales como Buenos Aires y Ciudad de México.',
    link: 'https://www.ticketmaster.pe/event/robbie-williams-lima-2026-home',
  },
  modal_6: {
    titulo: 'Asesinato en el Expreso Oriente',
    categoria: 'ARTE Y CULTURA',
    fecha: '10 de septiembre de 2026',
    lugar: 'Centro Cultural de la Universidad de Lima',
    plataforma: 'Joinnus',
    precio: 35,
    descripcion:
      'En pleno invierno, el lujoso tren Expreso Oriente se ve detenido por una tormenta de nieve en lo profundo de Europa. A la mañana siguiente, uno de los pasajeros aparece brutalmente asesinado en su habitación, con la puerta cerrada desde adentro. El célebre detective Hercule Poirot, a bordo por casualidad, debe desenredar una red de secretos, identidades ocultas y motivos enterrados entre los distinguidos viajeros del tren. Todos tienen algo que ocultar. Todos podrían ser culpables. Y el verdadero asesino viaja entre ellos.',
    link: 'https://www.ticketmaster.pe/event/asesinato-en-el-expreso-oriente-2026',
  },
  modal_7: {
    titulo: 'Las aulas celestes',
    categoria: 'ARTE Y CULTURA',
    fecha: '15 de noviembre de 2026',
    lugar: 'Centro Cultural de la Universidad de Lima',
    plataforma: 'Joinnus',
    precio: 28,
    descripcion:
      'Descubre una nueva forma de experimentar el arte. Rember Yahuarcani lleva su universo visual al arte digital en una experiencia inmersiva inspirada en el mito de la creación del Clan de la Garza Blanca, de la nación uitoto.',
    link: 'https://www.ticketmaster.pe/event/las-aulas-celestes-2026',
  },
  modal_8: {
    titulo: 'Marco Antonio Solís',
    categoria: 'DEPORTES',
    fecha: '07 de noviembre de 2026',
    lugar: 'Teatro de la Alianza Francesa de Lima',
    plataforma: 'Lando',
    precio: 45,
    descripcion:
      'Coproducción de la Alianza Francesa de Lima, dirigida por Mariana de Althaus. Las aulas celestes es una adaptación teatral de la primera parte de la novela El principio del mundo, del escritor peruano Jeremías Gamboa.',
    link: 'https://www.ticketmaster.pe/event/coproduccion-alianza-francesa-lima-2026',
  },
  modal_9: {
    titulo: 'Sporting Cristal vs Alianza Lima',
    categoria: 'DEPORTES',
    fecha: '29 de octubre de 2026',
    lugar: 'Estadio Alberto Gallardo',
    plataforma: 'Joinnus',
    precio: 30,
    descripcion: 'Alentemos a la celeste una fecha más en el Gallardo con una fiesta 100% celeste. ¡Fuerza Cristal!',
    link: 'https://www.ticketmaster.pe/event/sporting-cristal-alianza-lima-2026',
  },
};

let modal = null;
let eventoActual = null;

function iniciar() {
  modal = document.createElement('dialog');
  modal.id = 'modal_evento';
  modal.className =
    'm-0 h-full w-full max-w-none max-h-none overflow-y-auto border-0 bg-transparent p-6 text-[var(--principal)] backdrop-blur-[1rem]';
  document.body.appendChild(modal);

  document.addEventListener('click', manejarClic);
}

function manejarClic(evento) {
  const modalTrigger = evento.target.closest('[data-modal]');

  if (modalTrigger) {
    evento.preventDefault();
    abrirDetalle(modalTrigger.dataset.modal);
  }

  if (!modal.contains(evento.target)) return;

  if (evento.target.closest('[data-cerrar]')) {
    modal.close();
  }

  if (evento.target.closest('[data-volver]')) {
    abrirDetalle(eventoActual);
  }

  if (!evento.target.closest('[data-tarjeta]')) {
    modal.close();
  }
}

function abrirDetalle(id) {
  const evento = eventosModal[id];

  eventoActual = id;
  modal.innerHTML = plantillaDetalle(evento, id);
  mostrar();
}

function abrirFormulario(id) {
  const evento = eventosModal[id];

  eventoActual = id;
  modal.innerHTML = plantillaFormulario(evento, id);
  mostrar();
}

function mostrar() {
  if (!modal.open) {
    modal.showModal();
  }
  modal.scrollTop = 0;
}

function plantillaDetalle(evento, id) {
  const precio = evento.precio > 0 ? formatearSoles(evento.precio) : 'Entrada libre';

  return `
    <div class="flex min-h-full justify-center">
      <div data-tarjeta
        class="my-auto w-full max-w-2xl rounded-[1.25rem] border border-[var(--principal_borde)] bg-[var(--fondo2)] p-6 shadow-[0_1.5625rem_3.125rem_-0.75rem_var(--sombra)]">

        <div class="flex items-start justify-between gap-4 border-b border-[var(--principal_borde)] pb-4">
          <div>
            <p class="text-[0.75rem] leading-[1rem] font-bold uppercase tracking-widest text-[var(--principal)]">${evento.tipo}</p>
            <h3 class="text-[1.5rem] leading-[2rem] font-bold text-[var(--secundario)]">${evento.titulo}</h3>
          </div>
          <button type="button" data-cerrar
            class="grid h-10 w-10 shrink-0 place-items-center rounded-[0.75rem] border-0 bg-[var(--secundario_suave)] cursor-pointer transition-[background] duration-200 ease-in hover:bg-[var(--principal_borde)]">
            <img src="src/assets/cerrar.svg" alt="" class="h-5 w-5">
          </button>
        </div>

        <div class="pt-5">
          <p class="mb-5 text-[var(--principal_medio)]">${evento.descripcion}</p>

          <ul class="flex flex-col gap-3">
            <li class="flex items-center gap-2">
              <img src="src/assets/calendario.svg" alt="" class="w-4 shrink-0">
              <span><strong class="font-bold">Fecha:</strong> ${evento.fecha}</span>
            </li>
            <li class="flex items-center gap-2">
              <img src="src/assets/pin.svg" alt="" class="w-4 shrink-0">
              <span><strong class="font-bold">Lugar:</strong> ${evento.lugar}</span>
            </li>
            <li class="flex items-center gap-2">
              <img src="src/assets/ticket.svg" alt="" class="w-4 shrink-0">
              <span><strong class="font-bold">Precio:</strong> ${precio}</span>
            </li>
            <li class="flex items-center gap-2">
              <img src="src/assets/ticket.svg" alt="" class="w-4 shrink-0">
              <span>Entradas en
                <a href="${evento.link}" target="_blank" rel="noopener"
                  class="font-semibold text-[var(--secundario)] underline underline-offset-[0.1875rem] transition-[color] duration-200 ease-in hover:text-[var(--principal)]">${evento.plataforma}</a>
              </span>
            </li>
          </ul>

          <div class="mt-6">
            <button type="button" data-volver
              class="inline-flex w-full items-center justify-center gap-2 rounded-[0.75rem] border-2 border-[var(--principal_borde)] bg-[var(--fondo2)] px-6 py-3 font-[inherit] text-[1rem] leading-[1.5rem] font-bold text-[var(--secundario)] cursor-pointer transition-[background,border-color] duration-200 ease-in hover:border-[var(--secundario)] hover:bg-[var(--secundario_suave)]">
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>`;
}

function plantillaFormulario(evento, id) {
  return `
    <div class="flex min-h-full justify-center">
      <form data-formulario data-tarjeta
        class="my-auto w-full max-w-2xl rounded-[1.25rem] border border-[var(--principal_borde)] bg-[var(--fondo2)] p-6 shadow-[0_1.5625rem_3.125rem_-0.75rem_var(--sombra)]">

        <div class="flex items-start justify-between gap-4 border-b border-[var(--principal_borde)] pb-4">
          <div>
            <p class="text-[0.75rem] leading-[1rem] font-bold uppercase tracking-widest text-[var(--principal)]">INSCRIPCION</p>
            <h3 class="text-[1.5rem] leading-[2rem] font-bold text-[var(--secundario)]">${evento.titulo}</h3>
          </div>
          <button type="button" data-cerrar
            class="grid h-10 w-10 shrink-0 place-items-center rounded-[0.75rem] border-0 bg-[var(--secundario_suave)] cursor-pointer transition-[background] duration-200 ease-in hover:bg-[var(--principal_borde)]">
            <img src="src/assets/cerrar.svg" alt="" class="h-5 w-5">
          </button>
        </div>

        <div class="flex flex-col gap-4 pt-5">
          <p class="text-[0.875rem] leading-[1.25rem] text-[var(--principal_medio)]">${evento.fecha} · ${evento.lugar}</p>

          <label class="flex flex-col gap-1.5 text-[0.875rem] leading-[1.25rem] font-bold text-[var(--principal_oscuro)]">
            Nombre del titular
            <input type="text" name="titular" required maxlength="80" autocomplete="off" placeholder="Ej. Hector Campos"
              class="w-full rounded-[0.75rem] border-2 border-[var(--principal_borde)] bg-[var(--fondo2)] px-4 py-3 font-[inherit] font-semibold text-[var(--principal)] transition-[border-color,box-shadow] duration-200 ease-in placeholder:font-medium placeholder:text-[var(--principal_medio)] focus:border-[var(--secundario)] focus:shadow-[0_0_0_0.25rem_var(--amarillo_sombra)] focus:outline-none">
          </label>

          <label class="flex flex-col gap-1.5 text-[0.875rem] leading-[1.25rem] font-bold text-[var(--principal_oscuro)]">
            Cantidad de entradas
            <input type="number" name="cantidad" min="1" max="10" value="1" required
              class="w-full rounded-[0.75rem] border-2 border-[var(--principal_borde)] bg-[var(--fondo2)] px-4 py-3 font-[inherit] font-semibold text-[var(--principal)] transition-[border-color,box-shadow] duration-200 ease-in placeholder:font-medium placeholder:text-[var(--principal_medio)] focus:border-[var(--secundario)] focus:shadow-[0_0_0_0.25rem_var(--amarillo_sombra)] focus:outline-none">
          </label>

          <div class="rounded-[0.75rem] bg-[var(--secundario_suave)] p-4 text-[0.875rem] leading-[1.25rem]">
            <p>Precio por entrada: <strong class="font-bold">${formatearSoles(evento.precio)}</strong></p>
            <p>Total: <strong class="font-bold" data-total>${formatearSoles(evento.precio)}</strong></p>
            <p class="mt-1 text-[0.75rem] leading-[1rem] text-[var(--principal_medio)]">El precio incluye IGV (18%).</p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <button type="button" data-volver
              class="inline-flex w-full items-center justify-center gap-2 rounded-[0.75rem] border-2 border-[var(--principal_borde)] bg-[var(--fondo2)] px-6 py-3 font-[inherit] text-[1rem] leading-[1.5rem] font-bold text-[var(--secundario)] cursor-pointer transition-[background,border-color] duration-200 ease-in hover:border-[var(--secundario)] hover:bg-[var(--secundario_suave)]">
              Volver
            </button>
            <button type="submit"
              class="inline-flex w-full items-center justify-center gap-2 rounded-[0.75rem] border-2 border-[var(--amarillo)] bg-[var(--amarillo)] px-6 py-3 font-[inherit] text-[1rem] leading-[1.5rem] font-bold text-[var(--principal)] cursor-pointer transition-[background,transform,box-shadow,border-color] duration-200 ease-in hover: hover:border-[var(--amarillo_oscuro)] hover:bg-[var(--amarillo_oscuro)] hover:shadow-[0_0.5rem_1rem_var(--amarillo_sombra)]">
              Aceptar
            </button>
          </div>
        </form>
      </div>
    </div>`;
}

function formatearSoles(numero) {
  return `S/ ${numero.toFixed(2)}`;
}
iniciar();
