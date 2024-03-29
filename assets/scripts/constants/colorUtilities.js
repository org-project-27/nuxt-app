//Colors definition
const $white_color_type0 = '#FFFFFF';
const $white_color_type1 = '#F9F6EE';
const $white_color_type2 = '#F8F7F4';
const $white_color_type3 = '#FBFFF4';
const $white_color_type4 = '#FCF5E5';
const $white_color_type5 = '#F5F5F7';
const $white_color = $white_color_type2;

const $black_color = '#0B1623';
const $error_color = '#d50000';
const $success_color = '#147930';
const $warning_color = '#FEBD15';
const $main_color = '#009DE0';
const $black_color_0 = darken($white_color, 80);

// Colors
const colors = {
    // White colors
    $white_color: '#fff',
    $white_color_1: '#f5f5f5',
    $white_color_2: '#f2f2f2',
    $white_color_3: '#f0f0f0',
    $white_color_4: '#ededed',
    $white_color_5: '#eee',
    $white_color_6: '#ddd',
    $white_color_7: '#ccc',
    $white_color_8: '#bbb',
    $white_color_9: '#aaa',

    // Error colors
    $error_color,
    $error_color_1: lighten($error_color, 10),
    $error_color_2: lighten($error_color, 20),
    $error_color_3: lighten($error_color, 30),
    $error_color_4: lighten($error_color, 40),
    $error_color_5: lighten($error_color, 50),
    $error_color_6: lighten($error_color, 60),
    $error_color_7: lighten($error_color, 70),
    $error_color_8: lighten($error_color, 80),
    $error_color_9: lighten($error_color, 90),

    // Success colors
    $success_color,
    $success_color_1: lighten($success_color, 10),
    $success_color_2: lighten($success_color, 20),
    $success_color_3: lighten($success_color, 30),
    $success_color_4: lighten($success_color, 40),
    $success_color_5: lighten($success_color, 50),
    $success_color_6: lighten($success_color, 60),
    $success_color_7: lighten($success_color, 70),
    $success_color_8: lighten($success_color, 80),
    $success_color_9: lighten($success_color, 90),

    // Warning colors
    $warning_color,
    $warning_color_1: lighten($warning_color, 10),
    $warning_color_2: lighten($warning_color, 20),
    $warning_color_3: lighten($warning_color, 30),
    $warning_color_4: lighten($warning_color, 40),
    $warning_color_5: lighten($warning_color, 50),
    $warning_color_6: lighten($warning_color, 60),
    $warning_color_7: lighten($warning_color, 70),
    $warning_color_8: lighten($warning_color, 80),
    $warning_color_9: lighten($warning_color, 90),


    // Main colors
    $main_color,
    $main_color_1: '#00affa',
    $main_color_2: '#14b9ff',
    $main_color_3: '#2ec0ff',
    $main_color_4: '#47c8ff',
    $main_color_5: '#61d0ff',
    $main_color_6: '#7ad7ff',
    $main_color_7: '#94dfff',
    $main_color_8: '#ade6ff',
    $main_color_9: '#c7eeff',

    // Black colors
    $black_color,
    $black_color_1: '#0d1b2b',
    $black_color_2: '#102033',
    $black_color_3: '#12253a',
    $black_color_4: '#152a42',
    $black_color_5: '#172e4a',
    $black_color_6: '#1a3352',
    $black_color_7: '#1c3859',
    $black_color_8: '#1f3d61',
    $black_color_9: '#214269',
}

// Box shadows
export const boxShadows = {
        $box_shadow__2: 'inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9), inset 0 _2px 1px rgba(0,0,0,0.25)',
        $box_shadow__1: '0 0 10px 0 rgba(0,0,0,0.45) inset',
        $box_shadow_0: '0px 3px 6px 0px rgba(140, 149, 159, 0.15)',
        $box_shadow_1: `0 1px 3px ${colors.$white_color_3}, 0 1px 2px rgba(0,0,0,0.24)`,
        $box_shadow_2: `0px 3px 8px ${colors.$white_color_3}`,
        $box_shadow_3: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        $box_shadow_4: '0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11)',
        $box_shadow_5: '0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,0.12)',
}

export function lighten(hex, percent) {
    hex = hex.replace(/^\s*#|\s*$/g, '');

    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);

    r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)));
    g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)));
    b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)));

    r = r.toString(16).padStart(2, '0');
    g = g.toString(16).padStart(2, '0');
    b = b.toString(16).padStart(2, '0');

    return `#${r}${g}${b}`;
}

export function darken(hex, percent) {
    hex = hex.replace(/^\s*#|\s*$/g, '');

    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);

    r = Math.max(0, Math.floor(r - r * (percent / 100)));
    g = Math.max(0, Math.floor(g - g * (percent / 100)));
    b = Math.max(0, Math.floor(b - b * (percent / 100)));

    r = r.toString(16).padStart(2, '0');
    g = g.toString(16).padStart(2, '0');
    b = b.toString(16).padStart(2, '0');

    return `#${r}${g}${b}`;
}

export default {
    ...colors,
    boxShadows
}