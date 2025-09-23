window.getEnv = async function() {
    if (window._env) return window._env;
    const res = await fetch('.env');
    const text = await res.text();
    const env = {};
    text.split('\n').forEach(line => {
        const [key, ...vals] = line.split('=');
        if (key && vals.length) env[key.trim()] = vals.join('=').trim();
    });
    window._env = env;
    return env;
};