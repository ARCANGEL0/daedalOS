"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LINUX_IMAGE_PATH = exports.BACKUP_NAME_SERVER = exports.PRIMARY_NAME_SERVER = exports.PI_ASCII = exports.PROMPT_CHARACTER = exports.WAPM_STD_IN_EXCLUDE_ARGS = exports.WAPM_STD_IN_APPS = exports.config = void 0;
exports.config = {
    allowTransparency: true,
    cols: 70,
    cursorBlink: true,
    cursorInactiveStyle: "none",
    cursorStyle: "underline",
    cursorWidth: 8,
    fontFamily: "Fira Code, Monaco, Ubunto Mono, Lucida Console, Courier New, monospace",
    fontSize: 14,
    fontWeight: "100",
    rows: 20,
    theme: {
        background: 'rgb(5, 5, 5, 0.2)',
        foreground: "rgb(15, 255, 15)",
    },
};
exports.WAPM_STD_IN_APPS = ["lolcat"];
exports.WAPM_STD_IN_EXCLUDE_ARGS = ["--help", "-h", "--version", "-V"];
exports.PROMPT_CHARACTER = "root@arcangelo";
exports.PI_ASCII = [
    "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",
    "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",
    "▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒",
    "▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒",
    "▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒",
    "▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▄░░▒▒▒▒▒",
    "▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▌░░▒▒▒▒",
    "▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▄▄███▀░░░░▒▒▒",
    "▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░█████░▄█░░░░▒▒",
    "▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░▄████████▀░░░░▒▒",
    "▒▒░░░░░░░░░░░░░░░░░░░░░░░░▄█████████░░░░░░░▒",
    "▒░░░░░░░░░░░░░░░░░░░░░░░░░░▄███████▌░░░░░░░▒",
    "▒░░░░░░░░░░░░░░░░░░░░░░░░▄█████████░░░░░░░░▒",
    "▒░░░░░░░░░░░░░░░░░░░░░▄███████████▌░░░░░░░░▒",
    "▒░░░░░░░░░░░░░░░▄▄▄▄██████████████▌░░░░░░░░▒",
    "▒░░░░░░░░░░░▄▄███████████████████▌░░░░░░░░░▒",
    "▒░░░░░░░░░▄██████████████████████▌░░░░░░░░░▒",
    "▒░░░░░░░░████████████████████████░░░░░░░░░░▒",
    "▒█░░░░░▐██████████▌░▀▀███████████░░░░░░░░░░▒",
    "▐██░░░▄██████████▌░░░░░░░░░▀██▐█▌░░░░░░░░░▒▒",
    "▒██████░█████████░░░░░░░░░░░▐█▐█▌░░░░░░░░░▒▒",
    "▒▒▀▀▀▀░░░██████▀░░░░░░░░░░░░▐█▐█▌░░░░░░░░▒▒▒",
    "▒▒▒▒▒░░░░▐█████▌░░░░░░░░░░░░▐█▐█▌░░░░░░░▒▒▒▒",
    "▒▒▒▒▒▒░░░░███▀██░░░░░░░░░░░░░█░█▌░░░░░░▒▒▒▒▒",
    "▒▒▒▒▒▒▒▒░▐██░░░██░░░░░░░░▄▄████████▄▒▒▒▒▒▒▒▒",
    "▒▒▒▒▒▒▒▒▒██▌░░░░█▄░░░░░░▄███████████████████",
    "▒▒▒▒▒▒▒▒▒▐██▒▒░░░██▄▄███████████████████████",
    "▒▒▒▒▒▒▒▒▒▒▐██▒▒▄████████████████████████████",
    "▒▒▒▒▒▒▒▒▒▒▄▄████████████████████████████████",
    "████████████████████████████████████████████",
];
exports.PRIMARY_NAME_SERVER = [
    "https://cloudflare-dns.com/dns-query",
    "1.1.1.1",
];
exports.BACKUP_NAME_SERVER = ["https://dns.google/resolve", "8.8.8.8"];
exports.LINUX_IMAGE_PATH = "/System/linux.bin";