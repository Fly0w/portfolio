# Portfolio

This is my personal portfolio made with ReactJS. It is translated into 3 languagues : English, Japanese, French

![Portfolio preview-min](https://github.com/Fly0w/portfolio/assets/121224710/069ce4ae-2f97-4f01-a16b-827deb7b529d)


## Features
### Dynamic project preview

You can select the project you want to see by clicking the small icon above the preview window. By clicking one project, the preview changes dynamically, as well as the description (when hovering the preview), links to website and github repository, and also used tools icons.



### File download
By clicking the Résumé button in the Navigation Bar, you can download the Résumé on your device.

![File download](https://github.com/Fly0w/portfolio/assets/121224710/a6a9e49c-f53a-4de5-95f6-a4da5d483351)


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

![Change language](https://github.com/Fly0w/portfolio/assets/121224710/8cc4e26e-4b43-47db-9305-cc6a0305e954)

