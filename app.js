"use strict";
var ImageFormat;
(function (ImageFormat) {
    ImageFormat["PNG"] = "png";
    ImageFormat["JPG"] = "jpg";
})(ImageFormat || (ImageFormat = {}));
class ImageBuilder {
    constructor() {
        this.formats = [];
        this.resolutions = [];
    }
    addPng() {
        if (this.formats.includes(ImageFormat.PNG)) {
            return this;
        }
        this.formats.push(ImageFormat.PNG);
        return this;
    }
    addJpg() {
        if (this.formats.includes(ImageFormat.JPG)) {
            return this;
        }
        this.formats.push(ImageFormat.JPG);
        return this;
    }
    addResolution(width, height) {
        this.resolutions.push({ width, height });
        return this;
    }
    build() {
        const res = [];
        for (const r of this.resolutions) {
            for (const f of this.formats) {
                res.push({
                    format: f,
                    width: r.width,
                    height: r.height
                });
            }
        }
        return res;
    }
}
console.log(new ImageBuilder()
    .addPng()
    .addJpg()
    .addResolution(100, 50)
    .addResolution(200, 100)
    .build());
