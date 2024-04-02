import { HomeIcon, SearchIcon } from '@primer/octicons-react'
import { Page } from './interfaces/pages.interface';

export const pages: Page[] = [
    {
        icon: HomeIcon,
        label: 'Inicio',
        href: '/'
    },
    {
        icon: SearchIcon,
        label: 'Buscar',
        href: '/search'
    },
];