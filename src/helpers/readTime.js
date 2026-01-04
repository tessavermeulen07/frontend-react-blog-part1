function readTime (text) {

if (!text) return 0;

    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    const minutes = (wordCount/100) * 0.3;

    return Math.ceil(minutes);

}

export default readTime;

