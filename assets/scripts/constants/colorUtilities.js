import colors from '@/assets/colors.json';

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