# Portfolio

This is my personal portfolio made with ReactJS. It is translated into 3 languagues : English, Japanese, French


![](https://github.com/Fly0w/portfolio/blob/main/Media/Portfolio%20preview-min.gif)


## Features
### Dynamic project preview

You can select the project you want to see by clicking the small icon above the preview window. By clicking one project, the preview changes dynamically, as well as the description (when hovering the preview), links to website and github repository, and also used tools icons.

![](https://github.com/Fly0w/portfolio/blob/main/Media/Project%20Change.gif)

### File download
By clicking the Résumé button in the Navigation Bar, you can download the Résumé on your device.

![](https://github.com/Fly0w/portfolio/blob/main/Media/File%20download.gif)

### Dynamic language change
It is possible to chose between the 3 languages from the Navigation Bar. The app uses a "Translation" file with all the text of the App. This allows dynamic language change in the render.

```javascript
  export const translations = {
    en: {...
    },
    jp: {...
    },
    fr: {...
    }
  };
```

![](https://github.com/Fly0w/portfolio/blob/main/Media/Change%20language.gif)
