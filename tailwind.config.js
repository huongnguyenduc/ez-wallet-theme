/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.hbs', './**/*.hbs'],
    darkMode: 'class', // or 'media' or 'class
    theme: {
        extend: {
            container: {
                center: true,
                padding: '1rem',
            },
            colors: {
                primary: {
                    green: {
                        900: '#007c43', // Green Darkest
                        800: '#008e4c', // Green_09
                        700: '#00A056', // Green_08
                        600: '#00B260', // Green_07
                        500: '#00E57B', // Green_01
                        400: '#17E586', // Green_02
                        300: '#39E596', // Green_03
                        200: '#73E5B0', // Green_04
                        100: '#ACE5CA', // Green_05
                        75: '#78C787', // Green_75
                        0: '#CEF2E1', // Green_06
                    },
                    yellow: {
                        900: '#856800', // Yellow_Darkest
                        800: '#987700', // Yellow_09
                        700: '#AB8600', // Yellow_08
                        600: '#BF9500', // Yellow_07
                        500: '#FFCC00', // Yellow_01
                        400: '#FFD11A', // Yellow_02
                        300: '#FFD840', // Yellow_03
                        200: '#FFE580', // Yellow_04
                        100: '#FFF2BF', // Yellow_05
                        0: '#FFFAE5', // Yellow_06
                    },
                },
                neutral: {
                    900: '#35353A', // Black_01
                    800: '#5D5D66', // Black_02
                    700: '#8C8C99', // Grey_01
                    600: '#BBBBCC', // Grey_03
                    500: '#D2D2DA', // Grey_04
                    400: '#DEE4F3', // Grey_05
                    300: '#F3F3F9', // Grey_06
                    200: '#EEEEF8', // Grey_07
                    100: '#FFFFFF', // White_01
                    90: '#35353A', // Darkest
                    80: '#4D4D52', // Black
                    70: '#3D3D48', // Neutral/70
                    50: '#7C7D89', // Neutral/50
                    40: '#CBCBD4', // Neutral/30
                    30: '#F0F0F0', // Light grey
                    10: '#FAFAFA', // Lightest
                    default: '#1F1F23', // Default
                },
                accent: {
                    green: {
                        75: '#FFF3D5',
                        100: '#53A780',
                    },
                    blue: {
                        300: '#408DFF', // Blue_01
                        200: '#80B3FF', // Blue_02
                        100: '#BFD9FF', // Blue_03
                    },
                    red: {
                        300: '#FF4040', // Red_01
                        200: '#FF8080', // Red_02
                        100: '#FFBFBF', // Red_03
                    },
                    purple: {
                        300: '#6640FF', // Purple_01
                        200: '#9980FF', // Purple_02
                        100: '#CCBFFF', // Purple_03
                    },
                    yellow: {
                        100: '#FFD65C',
                        25: '#FFF3D5',
                    },
                },
                // gradient: 'linear-gradient(94.79deg, #53A780 0%, #FFD65C 108.89%)',
                // 'gradient-2': 'linear-gradient(94.79deg, #5CCE99 0%, #FFE597 108.89%)',
            },
            backgroundImage: {
                'gradient-1': 'linear-gradient(94.79deg, #53A780 0%, #FFD65C 108.89%)',
                'gradient-2': 'linear-gradient(94.79deg, #5CCE99 0%, #FFE597 108.89%)',
                'gradient-3': 'linear-gradient(94.82deg, rgba(254, 245, 223, 0.6) 0%, rgba(255, 243, 213, 0.6) 43.74%, rgba(255, 246, 225, 0.3) 95.92%)',
            },
            // backgroundColor: {
            //     'gradient-1': 'linear-gradient(94.79deg, #53A780 0%, #FFD65C 108.89%)',
            //     'gradient-2': 'linear-gradient(94.79deg, #5CCE99 0%, #FFE597 108.89%)',
            // },
            spacing: {
                1.25: '0.3125rem' /* 5px */,
                1.75: '0.4375rem' /* 7px */,
                2.25: '0.5625rem' /* 9px */,
                2.5: '0.625rem' /* 10px */,
                2.75: '0.6875rem' /* 11px */,
                4.5: '1.125rem' /* 18px */,
                7.5: '1.875rem' /* 30px */,
                12.5: '3.125rem' /* 50px */,
                13: '3.25rem' /* 52px */,
                26.5: '6.625rem' /* 106px */,
                50: '12.5rem' /* 200px */,
                75: '18.75rem' /* 300px */,
                101: '25.25rem' /* 404px */,
            },
            boxShadow: {
                small: '0 5px 10px rgba(0, 0, 0, 0.12)',
                medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
            },
            fontSize: {
                xxs: ['0.625rem', {lineHeight: '1rem'}] /* 10px */,
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        iframe: {
                            aspectRatio: theme('aspectRatio.video'),
                            width: '100%',
                            height: 'auto',
                            borderRadius: theme('borderRadius.md'),
                        },
                        img: {
                            borderRadius: theme('borderRadius.md'),
                        },
                        a: {
                            color: theme('colors.primary.green.600'),
                            '&:hover': {
                                color: theme('colors.primary.green.500'),
                            },
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
    ],
};
