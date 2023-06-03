// import { get } from 'local-storage'
// import { SET_DATA_DOCENTE } from './storageConst'
// const dataUser: any = get(SET_DATA_DOCENTE)
export const listUsers =
[
  { id: 1, type: "cliente" },
  { id: 2, type: "asesor" },
  { id: 3, type: "administrador" },
  { id: 4, type: "supervisor" },
  { id: 5, type: "analista" },
  { id: 6, type: "gerente" }
]
export  const listaTipoDocumento = [
  { value: 1, label: 'DNI' },
  { value: 2, label: 'Cédula' },
  { value: 3, label: 'Pasaporte' },
  { value: 4, label: 'Libreta Militar' },
  // Agrega más opciones según tus necesidades
];

export const listCountries = [
  { code: 1, name: "Argentina" },
  { code: 2, name: "Bolivia" },
  { code: 3, name: "Brasil" },
  { code: 4, name: "Chile" },
  { code: 5, name: "Colombia" },
  { code: 6, name: "Costa Rica" },
  { code: 7, name: "Cuba" },
  { code: 8, name: "Ecuador" },
  { code: 9, name: "El Salvador" },
  { code: 10, name: "Guatemala" },
  { code: 11, name: "Honduras" },
  { code: 12, name: "México" },
  { code: 13, name: "Nicaragua" },
  { code: 14, name: "Panamá" },
  { code: 15, name: "Paraguay" },
  { code: 16, name: "Perú" },
  { code: 17, name: "República Dominicana" },
  { code: 18, name: "Uruguay" },
  { code: 19, name: "Venezuela" }
]

export const menuDefault = [
  {
    label: 'Sesiones de clase',
    link: '#',
    child: [
      {
        label: 'Horario',
        link: '/Intranet/vistas/principal',
        child: [],
        target: false,
      },
      {
        label: 'Para Hoy',
        link: `/default`,
        child: [],
        target: false,
      },
      {
        label: 'Solicitud de marcación',
        link: '/solicitud-de-marcacion',
        child: [],
        target: false,
      },
      {
        label: 'Abiertas',
        link: '/sesiones-abiertas',
        child: [],
        target: false,
      },
      {
        label: 'Anteriores',
        link: '/sesiones-anteriores',
        child: [],
        target: false,
      },
      {
        label: 'Recuperar/Adelantar clases',
        link: '/recuperar-adelantar',
        child: [],
        target: false,
      },
      {
        label: 'Registrar Delegado',
        link: '/registrar-delegado',
        child: [],
        target: false,
      },
      {
        label: 'Gestor Prácticas de Campo',
        link: '/practicas-campo',
        child: [],
        target: false,
      },
      {
        label: 'Gestor Tesis de Investigación',
        link: '/tesis-investigacion',
        child: [],
        target: false,
      },
      {
        label: 'Gestor Consulta Documentos',
        link: '/consulta-documentos',
        child: [],
        target: false,
      },
      /* {
        label: 'Asistencia',
        link: '/asistencia',
        child: [],
        target: false,
      }, */
    ],
  },
  {
    label: 'Registro de notas',
    link: '#',
    child: [
      {
        label: 'Ingreso de Notas',
        link: '/registro-de-notas',
        child: [],
        target: false,
      },
      {
        label: 'Evaluación de Competencias',
        link: '/evaluacion-de-competencias',
        child: [],
        target: false,
      },
      {
        label: 'Enviar Notas a S.A.',
        link: '/enviar-notas',
        child: [],
        target: false,
      },
      {
        label: 'Logs de Creacion de Token de Notas',
        link: '/logs-creacion',
        child: [],
        target: false,
      },
      {
        label: 'Solicitud de modificacion de notas',
        link: '/solicitud-de-modificacion',
        child: [],
        target: false,
      },
    ],
  },
  {
    label: 'Reportes',
    link: '#',
    child: [
      {
        label: 'Reportes Académicos',
        link: '/reportes-academicos',
        child: [],
        target: false,
      },
      {
        label: 'Reportes de evaluación a docente',
        link: '/reportes-evaluacion-docente',
        child: [],
        target: false,
      },
      {
        label: 'Tutorías',
        link: '/tutorias',
        child: [],
        target: false,
      },
    ],
  },
  {
    label: 'Herramientas',
    link: '#',
    child: [
      {
        label: 'Bibliotecas Virtuales',
        link: 'http://biblioteca.upn.edu.pe/',
        child: [],
        target: true,
      },
      {
        label: 'Correo Administrativo',
        link: 'https://www.office.com',
        child: [],
        target: true,
      },
      {
        label: 'Carga de Examenes',
        link: '/carga-examenes',
        child: [],
        target: false,
      },
      {
        label: 'Registro de día de descanso',
        link: '/docentes-descanso',
        child: [],
        target: false,
      },
      {
        label: 'Disponibilidad Horaria',
        link: '/disponibilidad-horario',
        child: [],
        target: false,
      },
      {
        label: 'Soporte Virtual UPN',
        link: '/soporte-virtual',
        child: [],
        target: false,
      },
      {
        label: 'Veritrade',
        link: 'https://business2.veritradecorp.com/es/referido?IdUsuario=146214',
        child: [],
        target: true,
      },
      {
        label: 'Reservas Online',
        link: 'https://upn.u-planner.com/app/suite/inicio',
        child: [],
        target: true,
      },
    ],
  },
  {
    label: 'Documentos',
    link: '#',
    child: [
      {
        label: 'Modelo educativo',
        link: 'https://intranetcert.upn.edu.pe/academico/Secure/ModeloEduc.aspx',
        child: [],
        target: true,
      },
      {
        label: 'Reglamentos',
        link: 'https://www.upn.edu.pe/transparencia/reglamentos',
        child: [],
        target: true,
      },
      {
        label: 'Documentos / Manuales',
        link: '/documentos-manuales',
        child: [],
        target: false,
      },
      {
        label: 'Evaluación del desempeño docente',
        link: '/evaluacion-docente',
        child: [],
        target: false,
      },
    ],
    target: false,
  },
]


//-----------------------------------------------------------------


export const menuDefaultIntranet = [
  {
    label: 'Marcas',
    link: '#',
    child: [
      {
        label: 'Gestionar Marca',
        link: '/Intranet/vistas/principal',
        child: [],
        target: false,
      },
      {
        label: 'Link 2',
        link: `#`,
        child: [],
        target: false,
      },
      {
        label: 'Link 2',
        link: `#`,
        child: [],
        target: false,
      },

    ],
  },
  {
    label: 'Categorias',
    link: '#',
    child: [
      {
        label: 'Gestionar Categorias',
        link: '/Intranet/vistas/categorias',
        child: [],
        target: false,
      },
      {
        label: 'Link 2',
        link: '',
        child: [],
        target: false,
      },

    ],
  },
  {
    label: 'Productos',
    link: '#',
    child: [
      {
        label: 'Gestionar Productos',
        link: '/Intranet/vistas/productos',
        child: [],
        target: false,
      },
      {
        label: 'Productos Recomendados',
        link: '/',
        child: [],
        target: false,
      },
      {
        label: 'Unidad de Medida Productos',
        link: '/Intranet/vistas/unidadesmedida',
        child: [],
        target: false,
      },
    ],
  },
  {
    label: 'Pedidos',
    link: '#',
    child: [
      {
        label: 'Gestionar Pedidos',
        link: '/Intranet/vistas/productos',
        child: [],
        target: false,
      },
      {
        label: 'Productos Recomendados',
        link: '/',
        child: [],
        target: false,
      },
  
    ],
  },
  {
    label: 'Usuarios',
    link: '#',
    child: [
      {
        label: 'Gestionar Usuarios',
        link: '/Intranet/vistas/usuarios',
        child: [],
        target: false,
      },
      {
        label: 'Link 2',
        link: ' ',
        child: [],
        target: false,
      },

    ],
  },
  {
    label: 'Negocios',
    link: '#',
    child: [
      {
        label: 'Gestionar Negocios  ',
        link: '/Intranet/vistas/negocios',
        target: false,
      },
      {
        label: 'Productos por Negocio',
        link: '/Intranet/vistas/productosxnegocio',
      
        target: false,
      },

    ],
  },
  {
    label: 'Opciones',
    link: '#',
    child: [
      {
        label: 'Perfil',
        link: '/',
        child: [],
        target: false,
      },
      {
        label: 'Logout',
        link: '/Intranet/vistas/login',
        child: [],
        target: false,
      },

    ],
  },

]
