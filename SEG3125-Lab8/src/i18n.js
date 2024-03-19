import i18next from "i18next";
import global_en from "./translations/en.json";
import global_fr from "./translations/fr.json";


i18next
  .init({
    lng: "en",
	interpolation: {escapeValue:false},
    supportedLngs: ["en","fr"],
    resources:{
		en:{
			global : global_en
		},
		fr:{
			global : global_fr
		}
	}
   
  })

export default i18next;