import mui from "../assets/svg/blog/mui.png"
import reactVsAngular from "../assets/png/reactVsAngular.png"
import pnpm from "../assets/png/pnpm.jpg"
import customDecorator from "../assets/png/customDecorator.png"

export const blogData = [
    {
        id: 1,
        title: 'Goodbye to NPM Woes!',
        description: `This blog post focuses on introducing pnpm. Don't miss out on this game-changing tool. Dive in now and see the pnpm wizardry!`,
        date: 'May 13, 2023',
        image: pnpm,
        url: 'https://medium.com/@hameezrizwan/introducing-pnpm-the-efficient-package-manager-for-javascript-projects-5f4a3be739ae'
    },
    {
        id: 2,
        title: 'Custom Decorators in NEST JS',
        description: 'The article explains creating a custom GetUser decorator in NestJS to simplify fetching user emails from request tokens.',
        date: 'Apr 20, 2022',
        image: customDecorator,
        url: 'https://medium.com/@hameezrizwan/custom-decorator-in-nestjs-f8cecaad0f7a'
    },
    {
        id: 3,
        title: 'Persistent Columns in Material-UI DataGrid',
        description: 'If you are using DataGrid by Material-UI, here\'s how you can make them persistent',
        date: 'Apr 20, 2022',
        image: mui,
        url: 'https://medium.com/p/7ac1ad78f2a7'
    },
    // {
    //     id: 4,
    //     title: 'CHECK INTERNET SPEED FROM THE COMMAND LINE',
    //     description: 'Want to check your internet speed from the terminal? Here\'s the perfect way to the that.',
    //     date: 'Sep 17, 2020',
    //     image: 'https://1.bp.blogspot.com/-XTVMsZP3HaM/Xxpl394txlI/AAAAAAAABws/zovXWiuNGg4TzBwYYVFfJ1ixDb3JfVokgCNcBGAsYHQ/w400-h195/speedtest.png',
    //     url: 'https://hackzism.blogspot.com/2020/07/check-internet-speed-from-command-line.html'
    // },
    // {
    //     id: 5,
    //     title: 'GET MICHAEL\'S OR TREVOR\'S VEHICLES FULLY UPGRADED IN GTA V FOR FREE',
    //     description: 'In case you haven\'t heard of this game, GTA stands for \'Grand Theft Auto\'. It is an open-world game published by Rockstar Games.',
    //     date: 'Oct 1, 2020',
    //     image: 'https://1.bp.blogspot.com/-jhdtUBIRD_s/XxLFKQuRz9I/AAAAAAAABsM/mClfbfDFKvsUwA7Wyi25Lzu3DEmL2lxrACNcBGAsYHQ/s1919/gta.jpg',
    //     url: 'https://hackzism.blogspot.com/2020/07/how-can-you-get-michaels-or-trevors.html'
    // },
]