const adminNavLinks = [
    {
        id: 1,
        label: 'اطلاعات پروانه ای دفتر',
        to: '/admin/licenses',
        icon: 'far fa-address-card',
        content: [
            {
                id: 11,
                label: 'اطلاعات عمومی',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 12,
                label: 'اقدامات ارجاعی',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 13,
                label: 'سوابق دفتر',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 14,
                label: 'لیست تعرفه ها',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 15,
                label: 'رتبه بندی',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            }
        ]
    },
    {
        id: 2,
        label: 'اطلاعات بازدید از دفتر',
        to: '/admin/inspections',
        icon: 'fas fa-bug',
        content: [
            {
                id: 21,
                label: 'مکاتبات',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 22,
                label: 'مغایرات و تذکرات',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 23,
                label: 'تخلفات',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 24,
                label: 'اطلاعات بازدید',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 25,
                label: 'چک لیست عمومی',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 26,
                label: 'خدمات',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 27,
                label: 'همراه اول',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 28,
                label: 'ایرانسل',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 29,
                label: 'رایتل',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            }
        ]
    },
    {
        id: 3,
        label: 'ابزارها',
        to: '/admin/tools',
        icon: 'fas fa-wrench',
        content: [
            {
                id: 31,
                label: 'مسیریابی تا دفتر',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 32,
                label: 'دفاتر پیشخوان اطراف',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 33,
                label: 'پراکندگی دفاتر در منطقه',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            }
        ]
    },
    {
        id: 4,
        label: 'موارد آفلاین',
        to: '/admin/offline',
        icon: 'fas fa-houzz',
        content: [
            {
                id: 41,
                label: 'دریافت آخرین اطلاعات بازدید از دفتر',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 42,
                label: 'آپلود اطلاعات بازدید از دفتر',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            }
        ]
    },
    {
        id: 5,
        label: 'گزارشات',
        to: '/admin/reports',
        icon: 'fas fa-list',
        content: [
            {
                id: 51,
                label: 'ریز رتبه بندی',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 52,
                label: 'امتیازات منفی',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 53,
                label: 'اقدامات ارجاعی',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            },
            {
                id: 54,
                label: 'لیست پروانه های منقضی شده',
                to: '/admin/licenses',
                icon: 'fa fa-list feather'
            }
        ]
    }
];

// const getAdminNavLinks = () => {
//     return [...adminNavLinks];
// };

export default adminNavLinks;
