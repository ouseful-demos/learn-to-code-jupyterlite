"use strict";
(self["webpackChunkjupyterlab_empinken_extension"] = self["webpackChunkjupyterlab_empinken_extension"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonExtension: () => (/* binding */ ButtonExtension),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lumino_disposable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lumino/disposable */ "webpack/sharing/consume/default/@lumino/disposable");
/* harmony import */ var _lumino_disposable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lumino_disposable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/settingregistry */ "webpack/sharing/consume/default/@jupyterlab/settingregistry");
/* harmony import */ var _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_3__);



//import {CellList} from '@jupyterlab/notebook'; //gets list from ISharedNotebook
//import { Cell } from '@jupyterlab/cells';

// Remove items in first list from second list
function removeListMembers(list1, list2) {
    return list2.filter(item => !list1.includes(item));
}
/**
 * The plugin registration information.
 */
// https://jupyterlab.readthedocs.io/en/stable/api/index.html
// https://jupyterlab.readthedocs.io/en/3.3.x/api/interfaces/notebook.inotebooktracker.html
const empinken_tags_ = ["activity", "learner", "solution", "tutor"];
let empinken_tags = empinken_tags_;
let empinken_tags2 = empinken_tags_;
var tag2abstractTag = new Map();
class ButtonExtension {
    constructor(settingRegistry) {
        this.settingRegistry = settingRegistry;
        console.log('constructor');
        // read the settings
        this.setup_settings();
    }
    setup_settings() {
        Promise.all([this.settingRegistry.load(plugin.id)])
            .then(([settings]) => {
            console.log('reading settings');
            this.settings = settings;
            // update of settings is done automatically
            //settings.changed.connect(() => {
            //  this.update_settings(settings);
            //});
        })
            .catch((reason) => {
            console.error(reason.message);
        });
    }
    createNew(panel, context) {
        // Create the toolbar buttons
        const tagButtonSpec = {};
        let tag_prefix = '';
        if (this.settings.get('use_tagprefix').composite) {
            tag_prefix = this.settings.get('tagprefix') ? this.settings.get('tagprefix').composite.toString() : '';
        }
        else
            tag_prefix = '';
        const click_button = (typ) => {
            var _a;
            console.log('button pressed', typ);
            console.log("empinken_tags", empinken_tags);
            console.log("empinken_tags2", empinken_tags2);
            let activeCell = panel.content.activeCell;
            //console.log(label, type, caption)
            //console.log(activeCell)
            const nodeclass = 'iou-' + typ + "-node";
            const newtag = this.settings.get(typ + "_tag").composite;
            if (activeCell !== null) {
                let tagList = (_a = activeCell.model.getMetadata("tags")) !== null && _a !== void 0 ? _a : [];
                //console.log("cell metadata was", tagList, "; checking for", type);
                let tagtype = tag_prefix + newtag;
                if (tagList.includes(tagtype)) {
                    // ...then remove it
                    const index = tagList.indexOf(tagtype, 0);
                    if (index > -1) {
                        tagList.splice(index, 1);
                    }
                    activeCell.model.setMetadata("tags", tagList);
                    // Remove class
                    activeCell.node.classList.remove(nodeclass);
                    // cell.node.classList exists
                }
                else {
                    // remove other tags
                    tagList = removeListMembers(empinken_tags2, tagList);
                    empinken_tags_.forEach((tag) => {
                        activeCell.node.classList.remove('iou-' + tag + "-node");
                    });
                    // add required tag
                    tagList.push(tagtype);
                    activeCell.model.setMetadata("tags", tagList);
                    // if we want to render that tag:
                    if (this.settings.get(typ + "_render").composite)
                        activeCell.node.classList.add(nodeclass);
                }
                //console.log("cell metadata now is", tagList);
            }
        };
        let location = 10;
        //panel.content.activeCell
        empinken_tags_.forEach((tag) => {
            const tlabel = tag.charAt(0).toUpperCase();
            const newtag = this.settings.get(tag + '_tag').composite;
            tagButtonSpec[tag] = {
                'typ': tag,
                'label': tlabel,
                'newtag': newtag,
                'button': new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ToolbarButton({
                    className: 'tagger-' + tag + '-button',
                    label: tlabel,
                    // TO DO : currently missing data-command="ouseful-empinken:TAG" attribute
                    // in JL HTML on button
                    onClick: () => click_button(tag),
                    tooltip: 'Toggle ' + tag + ' metadata tag on a cell',
                }),
                'enabled': this.settings.get(tag + '_button').composite
            };
            // Add the button to the toolbar
            if (tagButtonSpec[tag]['enabled']) {
                panel.toolbar.insertItem(location, 'toggle_' + tag + 'TagButtonAction', tagButtonSpec[tag]['button']);
                location++;
            }
        });
        return new _lumino_disposable__WEBPACK_IMPORTED_MODULE_1__.DisposableDelegate(() => {
            // Tidy up with destructors for each button
            let typ;
            for (typ in tagButtonSpec) {
                if (tagButtonSpec[typ]['enabled'])
                    tagButtonSpec[typ]['button'].dispose();
            }
        });
    }
}
const plugin = {
    id: 'jupyterlab_empinken_extension:plugin',
    description: 'A JupyterLab extension adding a button to the Notebook toolbar.',
    requires: [_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_3__.INotebookTracker, _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_2__.ISettingRegistry],
    autoStart: true,
    activate: (app, notebookTracker, settings) => {
        //const { commands } = app;
        console.log("Activating empinken");
        let tag_prefix = '';
        /**
         * Load the settings for this extension
         *
         * @param setting Extension settings
         */
        Promise.all([settings.load(plugin.id)])
            .then(([setting]) => {
            // Read the settings
            //loadSetting(setting);
            const root = document.documentElement;
            // TO DO  - update settings needs to be outside the promise?
            // Somehow we need to have ensured we have ipdated settings before
            // we iterate the notebook
            const updateSettings = () => {
                if (setting.get('use_tagprefix').composite) {
                    tag_prefix = setting.get('tagprefix') ? setting.get('tagprefix').composite.toString() : '';
                }
                else
                    tag_prefix = '';
                empinken_tags = [];
                empinken_tags2 = []; //as per settings
                for (const tag of empinken_tags_) {
                    const prefixed_tag = tag_prefix + tag;
                    const prefixed_tag2 = tag_prefix + setting.get(tag + "_tag").composite;
                    empinken_tags.push(prefixed_tag);
                    empinken_tags2.push(prefixed_tag2);
                    tag2abstractTag.set(prefixed_tag2, tag);
                }
                // Update the document CSS colour settings
                for (let typ of empinken_tags_) {
                    const color = setting.get(typ + '_color').composite;
                    // if a tag rendering is disabled, set the colour as the theme
                    if (setting.get(typ + '_render').composite)
                        root.style.setProperty('--iou-' + typ + '-bg-color', color);
                    else
                        root.style.setProperty('--iou-' + typ + '-bg-color', "var(--jp-cell-editor-background)");
                }
            };
            updateSettings();
            // Listen for your plugin setting changes using Signal
            setting.changed.connect(updateSettings);
            // This attaches a command to a button
            // TO DO: if we want to hide the buttons, we need to manually register
            // them as widgets — or not — rather than add them via the plugin.json file
            // empinken_tags_.forEach((tag: string) => {
            //   if (setting.get(tag + '_button').composite as boolean)
            //     commands.addCommand('ouseful-empinken:' + tag,
            //       createEmpinkenCommand(tag.charAt(0).toUpperCase(),
            //         tag));
            // })
        });
        //labshell via https://discourse.jupyter.org/t/jupyterlab-4-iterating-over-all-cells-in-a-notebook/20033/2
        const labShell = app.shell;
        labShell.currentChanged.connect(() => {
            const notebook = app.shell.currentWidget;
            if (notebook) {
                notebook.revealed.then(() => {
                    var _a;
                    console.log("nb empinken_tags", empinken_tags);
                    console.log("nb empinken_tags2", empinken_tags2);
                    (_a = notebook.content.widgets) === null || _a === void 0 ? void 0 : _a.forEach(cell => {
                        var _a, _b;
                        const tagList = (_b = (_a = cell.model) === null || _a === void 0 ? void 0 : _a.getMetadata('tags')) !== null && _b !== void 0 ? _b : [];
                        console.log("cell metadata", tagList);
                        tagList.forEach((tag) => {
                            var _a;
                            if (empinken_tags2.includes(tag)) {
                                let abstract_tag = tag2abstractTag.has(tag) ? tag2abstractTag.get(tag) : tag;
                                // Decode the tag_
                                const tag_ = abstract_tag.replace(new RegExp(tag_prefix, 'g'), '');
                                console.log("hit", tag, "abstract", abstract_tag, "add class", 'iou-' + tag_ + '-node');
                                (_a = cell.node) === null || _a === void 0 ? void 0 : _a.classList.add('iou-' + tag_ + '-node');
                            }
                            else
                                console.log("miss", tag);
                        });
                    });
                });
            }
        });
        app.docRegistry.addWidgetExtension('Notebook', new ButtonExtension(settings));
    }
};
/**
 * Export the plugin as default.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.be515f656d341616f2b8.js.map