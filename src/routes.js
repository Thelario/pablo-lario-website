const Home = () => import('./pages/Home.vue')
const Portfolio = () => import('./pages/Portfolio.vue')
const Blog = () => import('./pages/Blog.vue')
const Library = () => import('./pages/Library.vue')
const Antilibrary = () => import('./pages/Antilibrary.vue')

export const routes = [
    { path: '/', name: 'home', components: { default:Home } },
    { path: '/portfolio', name: 'portfolio', components: { default:Portfolio } },
    { path: '/blog', name: 'blog', components: { default:Blog } },
    { path: '/library', name: 'library', components: { default:Library } },
    { path: '/antilibrary', name: 'antilibrary', components: { default:Antilibrary } },
]