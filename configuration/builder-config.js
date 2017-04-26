/*Form Builder Config*/
var FORM_BULIDER_CONFIG = FORM_BULIDER_CONFIG || {};

/****************** toolbar ***********************/
FORM_BULIDER_CONFIG.TOOLBAR = {
    ACTION : {},
    CONFIG : {}
};
/****************** toolbar ***********************/

/****************** component ***********************/
FORM_BULIDER_CONFIG.COMPONENTS = FORM_BULIDER_CONFIG.COMPONENTS || {};
FORM_BULIDER_CONFIG.COMPONENTS.URL = 'configuration/comonents.json';
/*控件板块手风琴是否只能打开一个，默认：false*/
FORM_BULIDER_CONFIG.COMPONENTS.ACCORDION_CLOSE_OTHERS = false;
FORM_BULIDER_CONFIG.COMPONENTS.TITLE_BASIC = 'BASIC_COMPONENTS_TITLE';
FORM_BULIDER_CONFIG.COMPONENTS.TITLE_ADVANCED = 'ADVANCED_COMPONENTS_TITLE';
FORM_BULIDER_CONFIG.COMPONENTS.TITLE_LAYOUT = 'LAYOUT_COMPONENTS_TITLE';
FORM_BULIDER_CONFIG.COMPONENTS.TITLE_SETTING_DISPLAY='SETTING_DISPLAY_TITLE';
FORM_BULIDER_CONFIG.COMPONENTS.TITLE_SETTING_DATA='SETTING_DATA_TITLE';
FORM_BULIDER_CONFIG.COMPONENTS.TITLE_SETTING_VALIDATION='SETTING_VALIDATION_TITLE';
FORM_BULIDER_CONFIG.COMPONENTS.TITLE_SETTING_API='SETTING_API_TITLE';
FORM_BULIDER_CONFIG.COMPONENTS.TITLE_SETTING_LAYOUT='SETTING_LAYOUT_TITLE';
FORM_BULIDER_CONFIG.COMPONENTS.TITLE_SETTING_CONDITION='SETTING_CONDITION_TITLE';


FORM_BULIDER_CONFIG.COMPONENTS.TEXTFIELD_TITLE = 'TEXTFIELD_TITLE';
FORM_BULIDER_CONFIG.COMPONENTS.NUMBER_TITLE = 'NUMBER_TITLE';
FORM_BULIDER_CONFIG.COMPONENTS.PHONENUMBER_TITLE = 'PHONENUMBER_TITLE';
FORM_BULIDER_CONFIG.COMPONENTS.COLUMNS_TITLE = 'COLUMNS_TITLE';
/****************** component ***********************/

/****************** event ***********************/
FORM_BULIDER_CONFIG.EVENTS = {
    /*fired when fbWrapLog service is called*/
    EVENT_CONSOLE_LOG : 'event-console-log',
    /*fired when form model data loaded*/
    EVENT_MODEL_DATA_LOADED : 'event-model-data-loaded',
    /*fire when form edtor initialied*/
    EVENT_DESIGNER_INITIALIED : 'event-designer-initialied',
    /*fired when components initialied*/
    EVENT_COMPONENTS_INITIALIED : 'event-components-initialied',
    /*fired when console intialied*/
    EVENT_CONSOLE_INITIALIED : 'event-console-initialied',
    /*fired when editor intialied*/
    EVENT_EDITOR_INITIALIED : 'event-editor-initialied',
    /*fired when property intialied*/
    EVENT_PROPERY_INITIALIED : 'event-property-initialied',
    /*fired when model saved intialied*/
    EVENT_MODEL_DATA_SAVED : 'event-model-data-saved',
    /*fired when model changed intialied*/
    EVENT_MODEL_DATA_CHANGED : 'event-model-data-changed'
};
/****************** event ***********************/