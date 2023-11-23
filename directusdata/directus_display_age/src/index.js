import DisplayComponent from './display.vue';

export default {
    id: 'directus-display-age',
    name: 'Display Age',
    icon: 'calendar_month',
    description: 'Display the current age from the date of birth',
    component: DisplayComponent,
    options: null,
    types: ['date'],
};