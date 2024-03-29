module.exports = [
    {
        key: 'X-DNS-Prefetch-Contorol',
        value: "on"
    },
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload"
    },
    {
        key: "X-Content-Type-Options",
        value: "nosniff"
    },
    {
        key: "X-Frame-Options",
        value: "sameorigin"
    },
    {
        key: "X-XSS-Protection",
        value: "1; mode=block"
    },
    {
        key: "Regerrer-Policy",
        value: "same-origin"
    },
    // {
    //     key: "Permissions-Policy",
    //     value: "camera=*"
    // },
    {
        key: "Content-Security-Policy",
        value: "default-src ¥'self¥'"
    }
]