const routes = [
    {
        path: "/greet",
        name: "Greet",
        title: "打招呼啦！",
        default: true,
        component: () => import("@/components/Greet.vue"),
    },
    {
        path: "/yell",
        name: "Yell",
        title: "叫！",
        default: false,
        component: () => import("@/components/Yell.vue"),
    },
    {
        path: "/greet/:name",
        name: "Greet To",
        title: "打招呼啦！",
        props: true,
        component: () => import("@/components/GreetTo.vue"),
    },
];

export default routes;