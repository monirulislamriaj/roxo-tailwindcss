module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                boom: {
                    100: "#00113e",
                    200: "#ADD6D2",
                    300: "#f7f9ff",
                    400: "#9D9EA5",
                    500: "#EAA4A4",
                },
            },
            fontFamily: {
                "exta-montserrat": ["Montserrat", "sans-serif"],

                Josefin: ["Josefin Sans", "sans-serif"],
            },
            fontSize: {
                tain: "2.5rem",
                "3xs": "0.6rem",
                "2xs": "0.7rem",
                xs: "0.8rem",
            },
            backgroundSize: {
                "100-200": "110% 220%",
            },
            backgroundImage: {
                none: "none",
                "gradient-white/black": "linear-gradient(to bottom, white 50%, black 50%)",
                "gradient-red/white": "linear-gradient(to bottom, red 50%, white 50%)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        function({ addComponents }) {
            addComponents({
                ".container": {
                    maxWidth: "100%",
                    margin: "auto",
                    "@screen sm": {
                        maxWidth: "540px",
                        margin: "auto",
                    },
                    "@screen md": {
                        maxWidth: "720px",
                        margin: "auto",
                    },
                    "@screen lg": {
                        maxWidth: "960px",
                        margin: "auto",
                    },
                    "@screen xl": {
                        maxWidth: "1140px",
                        margin: "auto",
                    },
                    "@screen 2xl": {
                        maxWidth: "1340px",
                        margin: "auto",
                    },
                },
            });
        },
    ],
};