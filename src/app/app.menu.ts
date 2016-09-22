export const MENU = [
    {
        path: 'pages',
        children: [
            {
                path: 'dashboard',
                data: {
                    menu: {
                        title: 'Dashboard',
                        icon: 'fa fa-dashboard',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            },
            {
                path: 'editors',
                data: {
                    menu: {
                        title: 'Editors',
                        icon: 'fa fa-edit',
                        selected: false,
                        expanded: false,
                        order: 100,
                    }
                },
                children: [
                    {
                        path: 'ckeditor',
                        data: {
                            menu: {
                                title: 'CKEditor',
                            }
                        }
                    }
                ]
            },
            {
                path: 'components',
                data: {
                    menu: {
                        title: 'Components',
                        icon: 'fa fa-gear',
                        selected: false,
                        expanded: false,
                        order: 250,
                    }
                },
                children: [
                    {
                        path: 'treeview',
                        data: {
                            menu: {
                                title: 'Tree View',
                            }
                        }
                    }
                ]
            }
        ]
    }
];
