console.log(html `<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(tpls, ...args) {
    var str = tpls[0];
    args.forEach((item, i) => {
        return str += escape(item) + tpls[i + 1];
    });
    
    return str;
}

function escape(string) {
    return string.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}