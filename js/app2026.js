const defaultConfig = {
    birthday_name: "Thay",
    main_message: "Que este dia seja tão especial e radiante quanto você! ✨",
    wish_text: "Muita paz, amor e felicidade sempre! 💫",

    primary_color: "#ffeaa7",
    secondary_color: "#ff6b6b",
    text_color: "#ffffff",

    font_family: "Dancing Script",
    font_size: 16,
};

function clampNumber(value, min, max, fallback) {
    const n = Number(value);
    if (Number.isNaN(n)) return fallback;
    return Math.min(max, Math.max(min, n));
}

function setCssVar(name, value) {
    document.documentElement.style.setProperty(name, value);
}

async function onConfigChange(config) {
    const nameEl = document.getElementById("name");
    const messageEl = document.getElementById("message");
    const wishEl = document.getElementById("wish");

    // Text
    nameEl.textContent = config.birthday_name || defaultConfig.birthday_name;
    messageEl.textContent = config.main_message || defaultConfig.main_message;
    wishEl.textContent = config.wish_text || defaultConfig.wish_text;

    // Colors (CSS vars)
    const primaryColor = config.primary_color || defaultConfig.primary_color;
    const textColor = config.text_color || defaultConfig.text_color;

    setCssVar("--primary-color", primaryColor);
    setCssVar("--text-color", textColor);

    // Font + base size (CSS vars)
    const fontFamily = config.font_family || defaultConfig.font_family;
    const baseSize = clampNumber(config.font_size, 12, 22, defaultConfig.font_size);

    setCssVar("--font-family", fontFamily);
    setCssVar("--base-font-size", `${baseSize}px`);
}

// SDK mapping (same idea as your original, just cleaner)
function mapToCapabilities(config) {
    return {
        recolorables: [
            {
                get: () => config.primary_color || defaultConfig.primary_color,
                set: (value) => {
                    config.primary_color = value;
                    window.elementSdk.setConfig({ primary_color: value });
                },
            },
            {
                get: () => config.text_color || defaultConfig.text_color,
                set: (value) => {
                    config.text_color = value;
                    window.elementSdk.setConfig({ text_color: value });
                },
            },
        ],
        borderables: [],
        fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (value) => {
                config.font_family = value;
                window.elementSdk.setConfig({ font_family: value });
            },
        },
        fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (value) => {
                config.font_size = value;
                window.elementSdk.setConfig({ font_size: value });
            },
        },
    };
}

function mapToEditPanelValues(config) {
    return new Map([
        ["birthday_name", config.birthday_name || defaultConfig.birthday_name],
        ["main_message", config.main_message || defaultConfig.main_message],
        ["wish_text", config.wish_text || defaultConfig.wish_text],
    ]);
}

// Init
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues,
    });
} else {
    onConfigChange(defaultConfig);
}
