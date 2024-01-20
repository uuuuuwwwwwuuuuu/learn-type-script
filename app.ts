enum ImageFormat {
    PNG = 'png',
    JPG = 'jpg'
}

interface IResolution {
    width: number;
    height: number;
}

interface IImageConversion extends IResolution {
    format: ImageFormat;
}

class ImageBuilder {
    private formats: ImageFormat[] = [];
    private resolutions: IResolution[] = [];

    addPng() {
        if (this.formats.includes(ImageFormat.PNG)) {
            return this
        }
        this.formats.push(ImageFormat.PNG);
        return this
    }

    addJpg() {
        if (this.formats.includes(ImageFormat.JPG)) {
            return this
        }
        this.formats.push(ImageFormat.JPG);
        return this
    }

    addResolution(width: number, height: number) {
        this.resolutions.push({width, height});
        return this
    }

    build(): IImageConversion[] {
        const res: IImageConversion[] = [];

        for(const r of this.resolutions) {
            for(const f of this.formats) {
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