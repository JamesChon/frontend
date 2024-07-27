export const sendEmail = async (formData) => {
    formData.append("access_key", "d335991d-0c14-4755-a90e-6ae2546f2d77");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
    });

    return response.json();
};
