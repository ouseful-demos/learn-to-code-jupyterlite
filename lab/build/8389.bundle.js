(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8389],{98389:(e,t,o)=>{"use strict";o.r(t),o.d(t,{commandEditItem:()=>T,default:()=>F,exportPlugin:()=>R,notebookTrustItem:()=>B});var n=o(84571),l=o(67906),a=o(8608),r=o(98838),s=o(43845),c=o(26030),d=o(11178),i=o(4341),u=o(30568),b=o(76768),m=o(46287),p=o(80669),k=o(7120),C=o(1751),g=o(67070),x=o(30742),A=o(79028),_=o(66065),w=o(98669),h=o(91884),f=o(77031),v=o(92611),N=o(37024);const E={activate:function(e,t,o){function n(e){function t(t,n,l){if(N.KernelMessage.isDisplayDataMsg(t)||N.KernelMessage.isStreamMsg(t)||N.KernelMessage.isErrorMsg(t)||N.KernelMessage.isExecuteResultMsg(t)){const a=o.getLogger(e.context.path);a.rendermime=e.content.rendermime;const r=Object.assign(Object.assign({},t.content),{output_type:t.header.msg_type});let s=n;(N.KernelMessage.isErrorMsg(t)||N.KernelMessage.isStreamMsg(t)&&"stderr"===t.content.name)&&(s=l),a.log({type:"output",data:r,level:s})}}e.context.sessionContext.iopubMessage.connect(((e,o)=>t(o,"info","info"))),e.context.sessionContext.unhandledMessage.connect(((e,o)=>t(o,"warning","error")))}o&&(t.forEach((e=>n(e))),t.widgetAdded.connect(((e,t)=>n(t))))},id:"@jupyterlab/notebook-extension:log-output",requires:[u.INotebookTracker],optional:[v.ILoggerRegistry],autoStart:!0};var y;!function(e){e.createNew="notebook:create-new",e.interrupt="notebook:interrupt-kernel",e.restart="notebook:restart-kernel",e.restartClear="notebook:restart-clear-output",e.restartAndRunToSelected="notebook:restart-and-run-to-selected",e.restartRunAll="notebook:restart-run-all",e.reconnectToKernel="notebook:reconnect-to-kernel",e.changeKernel="notebook:change-kernel",e.createConsole="notebook:create-console",e.createOutputView="notebook:create-output-view",e.clearAllOutputs="notebook:clear-all-cell-outputs",e.closeAndShutdown="notebook:close-and-shutdown",e.trust="notebook:trust",e.exportToFormat="notebook:export-to-format",e.run="notebook:run-cell",e.runAndAdvance="notebook:run-cell-and-select-next",e.runAndInsert="notebook:run-cell-and-insert-below",e.runInConsole="notebook:run-in-console",e.runAll="notebook:run-all-cells",e.runAllAbove="notebook:run-all-above",e.runAllBelow="notebook:run-all-below",e.renderAllMarkdown="notebook:render-all-markdown",e.toCode="notebook:change-cell-to-code",e.toMarkdown="notebook:change-cell-to-markdown",e.toRaw="notebook:change-cell-to-raw",e.cut="notebook:cut-cell",e.copy="notebook:copy-cell",e.pasteAbove="notebook:paste-cell-above",e.pasteBelow="notebook:paste-cell-below",e.pasteAndReplace="notebook:paste-and-replace-cell",e.moveUp="notebook:move-cell-up",e.moveDown="notebook:move-cell-down",e.clearOutputs="notebook:clear-cell-output",e.deleteCell="notebook:delete-cell",e.insertAbove="notebook:insert-cell-above",e.insertBelow="notebook:insert-cell-below",e.selectAbove="notebook:move-cursor-up",e.selectBelow="notebook:move-cursor-down",e.extendAbove="notebook:extend-marked-cells-above",e.extendTop="notebook:extend-marked-cells-top",e.extendBelow="notebook:extend-marked-cells-below",e.extendBottom="notebook:extend-marked-cells-bottom",e.selectAll="notebook:select-all",e.deselectAll="notebook:deselect-all",e.editMode="notebook:enter-edit-mode",e.merge="notebook:merge-cells",e.mergeAbove="notebook:merge-cell-above",e.mergeBelow="notebook:merge-cell-below",e.split="notebook:split-cell-at-cursor",e.commandMode="notebook:enter-command-mode",e.toggleAllLines="notebook:toggle-all-cell-line-numbers",e.undoCellAction="notebook:undo-cell-action",e.redoCellAction="notebook:redo-cell-action",e.markdown1="notebook:change-cell-to-heading-1",e.markdown2="notebook:change-cell-to-heading-2",e.markdown3="notebook:change-cell-to-heading-3",e.markdown4="notebook:change-cell-to-heading-4",e.markdown5="notebook:change-cell-to-heading-5",e.markdown6="notebook:change-cell-to-heading-6",e.hideCode="notebook:hide-cell-code",e.showCode="notebook:show-cell-code",e.hideAllCode="notebook:hide-all-cell-code",e.showAllCode="notebook:show-all-cell-code",e.hideOutput="notebook:hide-cell-outputs",e.showOutput="notebook:show-cell-outputs",e.hideAllOutputs="notebook:hide-all-cell-outputs",e.showAllOutputs="notebook:show-all-cell-outputs",e.enableOutputScrolling="notebook:enable-output-scrolling",e.disableOutputScrolling="notebook:disable-output-scrolling",e.selectLastRunCell="notebook:select-last-run-cell",e.replaceSelection="notebook:replace-selection"}(y||(y={}));const M="Notebook",S=["notebook","python","custom"],I={id:"@jupyterlab/notebook-extension:tracker",provides:u.INotebookTracker,requires:[u.INotebookWidgetFactory,g.ITranslator],optional:[l.ICommandPalette,c.IFileBrowserFactory,d.ILauncher,n.ILayoutRestorer,i.IMainMenu,p.ISettingRegistry,l.ISessionContextDialogs],activate:function(e,t,o,n,a,s,c,d,i,b){const m=o.load("jupyterlab"),p=e.serviceManager,{commands:k}=e,C=new u.NotebookTracker({namespace:"notebook"});c&&c.restore(C,{command:"docmanager:open",args:e=>({path:e.context.path,factory:M}),name:e=>e.context.path,when:p.ready}),e.docRegistry.addModelFactory(new u.NotebookModelFactory({})),function(e,t,o,n){const a=o.load("jupyterlab"),{commands:r,shell:s}=e;n=null!=n?n:l.sessionContextDialogs;const c=()=>W.isEnabled(s,t),d=()=>W.isEnabledAndSingleSelected(s,t);r.addCommand(y.runAndAdvance,{label:a.__("Run Selected Cells"),execute:e=>{const o=D(t,s,e);if(o){const{context:e,content:t}=o;return u.NotebookActions.runAndAdvance(t,e.sessionContext)}},isEnabled:c}),r.addCommand(y.run,{label:a.__("Run Selected Cells and Don't Advance"),execute:e=>{const o=D(t,s,e);if(o){const{context:e,content:t}=o;return u.NotebookActions.run(t,e.sessionContext)}},isEnabled:c}),r.addCommand(y.runAndInsert,{label:a.__("Run Selected Cells and Insert Below"),execute:e=>{const o=D(t,s,e);if(o){const{context:e,content:t}=o;return u.NotebookActions.runAndInsert(t,e.sessionContext)}},isEnabled:c}),r.addCommand(y.runAll,{label:a.__("Run All Cells"),execute:e=>{const o=D(t,s,e);if(o){const{context:e,content:t}=o;return u.NotebookActions.runAll(t,e.sessionContext)}},isEnabled:c}),r.addCommand(y.runAllAbove,{label:a.__("Run All Above Selected Cell"),execute:e=>{const o=D(t,s,e);if(o){const{context:e,content:t}=o;return u.NotebookActions.runAllAbove(t,e.sessionContext)}},isEnabled:()=>d()&&0!==t.currentWidget.content.activeCellIndex}),r.addCommand(y.runAllBelow,{label:a.__("Run Selected Cell and All Below"),execute:e=>{const o=D(t,s,e);if(o){const{context:e,content:t}=o;return u.NotebookActions.runAllBelow(t,e.sessionContext)}},isEnabled:()=>d()&&t.currentWidget.content.activeCellIndex!==t.currentWidget.content.widgets.length-1}),r.addCommand(y.renderAllMarkdown,{label:a.__("Render All Markdown Cells"),execute:e=>{const o=D(t,s,e);if(o){const{context:e,content:t}=o;return u.NotebookActions.renderAllMarkdown(t,e.sessionContext)}},isEnabled:c}),r.addCommand(y.restart,{label:a.__("Restart Kernel…"),execute:e=>{const l=D(t,s,e);if(l)return n.restart(l.sessionContext,o)},isEnabled:c}),r.addCommand(y.closeAndShutdown,{label:a.__("Close and Shut Down"),execute:e=>{const o=D(t,s,e);if(!o)return;const n=o.title.label;return(0,l.showDialog)({title:a.__("Shut down the notebook?"),body:a.__('Are you sure you want to close "%1"?',n),buttons:[l.Dialog.cancelButton(),l.Dialog.warnButton()]}).then((e=>{if(e.button.accept)return o.context.sessionContext.shutdown().then((()=>{o.dispose()}))}))},isEnabled:c}),r.addCommand(y.trust,{label:()=>a.__("Trust Notebook"),execute:e=>{const o=D(t,s,e);if(o){const{context:e,content:t}=o;return u.NotebookActions.trust(t).then((()=>e.save()))}},isEnabled:c}),r.addCommand(y.restartClear,{label:a.__("Restart Kernel and Clear All Outputs…"),execute:e=>{const l=D(t,s,e);if(l){const{content:e,sessionContext:t}=l;return n.restart(t,o).then((()=>{u.NotebookActions.clearAllOutputs(e)}))}},isEnabled:c}),r.addCommand(y.restartAndRunToSelected,{label:a.__("Restart Kernel and Run up to Selected Cell…"),execute:e=>{const l=D(t,s,e);if(l){const{context:e,content:t}=l;return n.restart(l.sessionContext,o).then((o=>{o&&u.NotebookActions.runAllAbove(t,e.sessionContext).then((o=>{(o||0===t.activeCellIndex)&&u.NotebookActions.run(t,e.sessionContext)}))}))}},isEnabled:d}),r.addCommand(y.restartRunAll,{label:a.__("Restart Kernel and Run All Cells…"),execute:e=>{const l=D(t,s,e);if(l){const{context:e,content:t,sessionContext:a}=l;return n.restart(a,o).then((o=>(o&&u.NotebookActions.runAll(t,e.sessionContext),o)))}},isEnabled:c}),r.addCommand(y.clearAllOutputs,{label:a.__("Clear All Outputs"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.clearAllOutputs(o.content)},isEnabled:c}),r.addCommand(y.clearOutputs,{label:a.__("Clear Outputs"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.clearOutputs(o.content)},isEnabled:c}),r.addCommand(y.interrupt,{label:a.__("Interrupt Kernel"),execute:e=>{var o;const n=D(t,s,e);if(!n)return;const l=null===(o=n.context.sessionContext.session)||void 0===o?void 0:o.kernel;return l?l.interrupt():void 0},isEnabled:c}),r.addCommand(y.toCode,{label:a.__("Change to Code Cell Type"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.changeCellType(o.content,"code")},isEnabled:c}),r.addCommand(y.toMarkdown,{label:a.__("Change to Markdown Cell Type"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.changeCellType(o.content,"markdown")},isEnabled:c}),r.addCommand(y.toRaw,{label:a.__("Change to Raw Cell Type"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.changeCellType(o.content,"raw")},isEnabled:c}),r.addCommand(y.cut,{label:a.__("Cut Cells"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.cut(o.content)},isEnabled:c}),r.addCommand(y.copy,{label:a.__("Copy Cells"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.copy(o.content)},isEnabled:c}),r.addCommand(y.pasteBelow,{label:a.__("Paste Cells Below"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.paste(o.content,"below")},isEnabled:c}),r.addCommand(y.pasteAbove,{label:a.__("Paste Cells Above"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.paste(o.content,"above")},isEnabled:c}),r.addCommand(y.pasteAndReplace,{label:a.__("Paste Cells and Replace"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.paste(o.content,"replace")},isEnabled:c}),r.addCommand(y.deleteCell,{label:a.__("Delete Cells"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.deleteCells(o.content)},isEnabled:c}),r.addCommand(y.split,{label:a.__("Split Cell"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.splitCell(o.content)},isEnabled:c}),r.addCommand(y.merge,{label:a.__("Merge Selected Cells"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.mergeCells(o.content)},isEnabled:c}),r.addCommand(y.mergeAbove,{label:a.__("Merge Cell Above"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.mergeCells(o.content,!0)},isEnabled:c}),r.addCommand(y.mergeBelow,{label:a.__("Merge Cell Below"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.mergeCells(o.content,!1)},isEnabled:c}),r.addCommand(y.insertAbove,{label:a.__("Insert Cell Above"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.insertAbove(o.content)},isEnabled:c}),r.addCommand(y.insertBelow,{label:a.__("Insert Cell Below"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.insertBelow(o.content)},isEnabled:c}),r.addCommand(y.selectAbove,{label:a.__("Select Cell Above"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.selectAbove(o.content)},isEnabled:c}),r.addCommand(y.selectBelow,{label:a.__("Select Cell Below"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.selectBelow(o.content)},isEnabled:c}),r.addCommand(y.extendAbove,{label:a.__("Extend Selection Above"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.extendSelectionAbove(o.content)},isEnabled:c}),r.addCommand(y.extendTop,{label:a.__("Extend Selection to Top"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.extendSelectionAbove(o.content,!0)},isEnabled:c}),r.addCommand(y.extendBelow,{label:a.__("Extend Selection Below"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.extendSelectionBelow(o.content)},isEnabled:c}),r.addCommand(y.extendBottom,{label:a.__("Extend Selection to Bottom"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.extendSelectionBelow(o.content,!0)},isEnabled:c}),r.addCommand(y.selectAll,{label:a.__("Select All Cells"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.selectAll(o.content)},isEnabled:c}),r.addCommand(y.deselectAll,{label:a.__("Deselect All Cells"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.deselectAll(o.content)},isEnabled:c}),r.addCommand(y.moveUp,{label:a.__("Move Cells Up"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.moveUp(o.content)},isEnabled:c}),r.addCommand(y.moveDown,{label:a.__("Move Cells Down"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.moveDown(o.content)},isEnabled:c}),r.addCommand(y.toggleAllLines,{label:a.__("Toggle All Line Numbers"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.toggleAllLineNumbers(o.content)},isEnabled:c}),r.addCommand(y.commandMode,{label:a.__("Enter Command Mode"),execute:e=>{const o=D(t,s,e);o&&(o.content.mode="command")},isEnabled:c}),r.addCommand(y.editMode,{label:a.__("Enter Edit Mode"),execute:e=>{const o=D(t,s,e);o&&(o.content.mode="edit")},isEnabled:c}),r.addCommand(y.undoCellAction,{label:a.__("Undo Cell Operation"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.undo(o.content)},isEnabled:c}),r.addCommand(y.redoCellAction,{label:a.__("Redo Cell Operation"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.redo(o.content)},isEnabled:c}),r.addCommand(y.changeKernel,{label:a.__("Change Kernel…"),execute:e=>{const l=D(t,s,e);if(l)return n.selectKernel(l.context.sessionContext,o)},isEnabled:c}),r.addCommand(y.reconnectToKernel,{label:a.__("Reconnect To Kernel"),execute:e=>{var o;const n=D(t,s,e);if(!n)return;const l=null===(o=n.context.sessionContext.session)||void 0===o?void 0:o.kernel;return l?l.reconnect():void 0},isEnabled:c}),r.addCommand(y.markdown1,{label:a.__("Change to Heading 1"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.setMarkdownHeader(o.content,1)},isEnabled:c}),r.addCommand(y.markdown2,{label:a.__("Change to Heading 2"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.setMarkdownHeader(o.content,2)},isEnabled:c}),r.addCommand(y.markdown3,{label:a.__("Change to Heading 3"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.setMarkdownHeader(o.content,3)},isEnabled:c}),r.addCommand(y.markdown4,{label:a.__("Change to Heading 4"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.setMarkdownHeader(o.content,4)},isEnabled:c}),r.addCommand(y.markdown5,{label:a.__("Change to Heading 5"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.setMarkdownHeader(o.content,5)},isEnabled:c}),r.addCommand(y.markdown6,{label:a.__("Change to Heading 6"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.setMarkdownHeader(o.content,6)},isEnabled:c}),r.addCommand(y.hideCode,{label:a.__("Collapse Selected Code"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.hideCode(o.content)},isEnabled:c}),r.addCommand(y.showCode,{label:a.__("Expand Selected Code"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.showCode(o.content)},isEnabled:c}),r.addCommand(y.hideAllCode,{label:a.__("Collapse All Code"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.hideAllCode(o.content)},isEnabled:c}),r.addCommand(y.showAllCode,{label:a.__("Expand All Code"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.showAllCode(o.content)},isEnabled:c}),r.addCommand(y.hideOutput,{label:a.__("Collapse Selected Outputs"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.hideOutput(o.content)},isEnabled:c}),r.addCommand(y.showOutput,{label:a.__("Expand Selected Outputs"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.showOutput(o.content)},isEnabled:c}),r.addCommand(y.hideAllOutputs,{label:a.__("Collapse All Outputs"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.hideAllOutputs(o.content)},isEnabled:c}),r.addCommand(y.showAllOutputs,{label:a.__("Expand All Outputs"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.showAllOutputs(o.content)},isEnabled:c}),r.addCommand(y.enableOutputScrolling,{label:a.__("Enable Scrolling for Outputs"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.enableOutputScrolling(o.content)},isEnabled:c}),r.addCommand(y.disableOutputScrolling,{label:a.__("Disable Scrolling for Outputs"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.disableOutputScrolling(o.content)},isEnabled:c}),r.addCommand(y.selectLastRunCell,{label:a.__("Select current running or last run cell"),execute:e=>{const o=D(t,s,e);if(o)return u.NotebookActions.selectLastRunCell(o.content)},isEnabled:c}),r.addCommand(y.replaceSelection,{label:a.__("Replace Selection in Notebook Cell"),execute:e=>{const o=D(t,s,e),n=e.text||"";if(o)return u.NotebookActions.replaceSelection(o.content,n)},isEnabled:c})}(e,C,o,b),n&&function(e,t){const o=t.load("jupyterlab");let n=o.__("Notebook Operations");[y.interrupt,y.restart,y.restartClear,y.restartRunAll,y.runAll,y.renderAllMarkdown,y.runAllAbove,y.runAllBelow,y.restartAndRunToSelected,y.selectAll,y.deselectAll,y.clearAllOutputs,y.toggleAllLines,y.editMode,y.commandMode,y.changeKernel,y.reconnectToKernel,y.createConsole,y.closeAndShutdown,y.trust].forEach((t=>{e.addItem({command:t,category:n})})),e.addItem({command:y.createNew,category:n,args:{isPalette:!0}}),n=o.__("Notebook Cell Operations"),[y.run,y.runAndAdvance,y.runAndInsert,y.runInConsole,y.clearOutputs,y.toCode,y.toMarkdown,y.toRaw,y.cut,y.copy,y.pasteBelow,y.pasteAbove,y.pasteAndReplace,y.deleteCell,y.split,y.merge,y.mergeAbove,y.mergeBelow,y.insertAbove,y.insertBelow,y.selectAbove,y.selectBelow,y.extendAbove,y.extendTop,y.extendBelow,y.extendBottom,y.moveDown,y.moveUp,y.undoCellAction,y.redoCellAction,y.markdown1,y.markdown2,y.markdown3,y.markdown4,y.markdown5,y.markdown6,y.hideCode,y.showCode,y.hideAllCode,y.showAllCode,y.hideOutput,y.showOutput,y.hideAllOutputs,y.showAllOutputs,y.enableOutputScrolling,y.disableOutputScrolling].forEach((t=>{e.addItem({command:t,category:n})}))}(n,o);let g=0;const A=e.docRegistry.getFileType("notebook");function h(e){C.forEach((t=>{t.setConfig(e)}))}function f(e){const o=Object.assign(Object.assign({},u.StaticNotebook.defaultEditorConfig.code),e.get("codeCellConfig").composite),n=Object.assign(Object.assign({},u.StaticNotebook.defaultEditorConfig.markdown),e.get("markdownCellConfig").composite),l=Object.assign(Object.assign({},u.StaticNotebook.defaultEditorConfig.raw),e.get("rawCellConfig").composite);t.editorConfig={code:o,markdown:n,raw:l},t.notebookConfig={scrollPastEnd:e.get("scrollPastEnd").composite,defaultCell:e.get("defaultCell").composite,recordTiming:e.get("recordTiming").composite,maxNumberOutputs:e.get("maxNumberOutputs").composite},t.shutdownOnClose=e.get("kernelShutdown").composite,h({editorConfig:t.editorConfig,notebookConfig:t.notebookConfig,kernelShutdown:t.shutdownOnClose})}t.widgetCreated.connect(((e,t)=>{var o,n;t.id=t.id||"notebook-"+ ++g,t.title.icon=null==A?void 0:A.icon,t.title.iconClass=null!==(o=null==A?void 0:A.iconClass)&&void 0!==o?o:"",t.title.iconLabel=null!==(n=null==A?void 0:A.iconLabel)&&void 0!==n?n:"",t.context.pathChanged.connect((()=>{C.save(t)})),C.add(t)}));const v=i?i.load(I.id):Promise.reject(new Error(`No setting registry for ${I.id}`));return e.restored.then((()=>v)).then((e=>{f(e),e.changed.connect((()=>{f(e)}))})).catch((e=>{console.warn(e.message),h({editorConfig:t.editorConfig,notebookConfig:t.notebookConfig,kernelShutdown:t.shutdownOnClose})})),d&&function(e,t,o,n,a){const r=n.load("jupyterlab"),{commands:s}=e;a=a||l.sessionContextDialogs,t.editMenu.undoers.add({tracker:o,undo:e=>{var t;null===(t=e.content.activeCell)||void 0===t||t.editor.undo()},redo:e=>{var t;null===(t=e.content.activeCell)||void 0===t||t.editor.redo()}}),t.editMenu.clearers.add({tracker:o,clearCurrentLabel:e=>r.__("Clear Output"),clearAllLabel:e=>r.__("Clear All Outputs"),clearCurrent:e=>u.NotebookActions.clearOutputs(e.content),clearAll:e=>u.NotebookActions.clearAllOutputs(e.content)}),t.fileMenu.newMenu.addGroup([{command:y.createNew}],10),t.fileMenu.closeAndCleaners.add({tracker:o,closeAndCleanupLabel:e=>r.__("Close and Shutdown Notebook"),closeAndCleanup:e=>{const t=e.title.label;return(0,l.showDialog)({title:r.__("Shut down the Notebook?"),body:r.__('Are you sure you want to close "%1"?',t),buttons:[l.Dialog.cancelButton(),l.Dialog.warnButton()]}).then((t=>{if(t.button.accept)return e.context.sessionContext.shutdown().then((()=>{e.dispose()}))}))}}),t.kernelMenu.kernelUsers.add({tracker:o,interruptKernel:e=>{var t;const o=null===(t=e.sessionContext.session)||void 0===t?void 0:t.kernel;return o?o.interrupt():Promise.resolve(void 0)},reconnectToKernel:e=>{var t;const o=null===(t=e.sessionContext.session)||void 0===t?void 0:t.kernel;return o?o.reconnect():Promise.resolve(void 0)},restartKernelAndClearLabel:e=>r.__("Restart Kernel and Clear All Outputs…"),restartKernel:e=>a.restart(e.sessionContext,n),restartKernelAndClear:e=>a.restart(e.sessionContext,n).then((t=>(t&&u.NotebookActions.clearAllOutputs(e.content),t))),changeKernel:e=>a.selectKernel(e.sessionContext,n),shutdownKernel:e=>e.sessionContext.shutdown()}),t.fileMenu.consoleCreators.add({tracker:o,createConsoleLabel:e=>r.__("New Console for Notebook"),createConsole:e=>W.createConsole(s,e,!0)});const c=[y.hideCode,y.hideOutput,y.hideAllCode,y.hideAllOutputs].map((e=>({command:e})));t.viewMenu.addGroup(c,10);const d=[y.showCode,y.showOutput,y.showAllCode,y.showAllOutputs].map((e=>({command:e})));t.viewMenu.addGroup(d,11),t.viewMenu.editorViewers.add({tracker:o,toggleLineNumbers:e=>{u.NotebookActions.toggleAllLineNumbers(e.content)},lineNumbersToggled:e=>{const t=e.content.editorConfig;return!!(t.code.lineNumbers&&t.markdown.lineNumbers&&t.raw.lineNumbers)}}),t.runMenu.codeRunners.add({tracker:o,runLabel:e=>r.__("Run Selected Cells"),runAllLabel:e=>r.__("Run All Cells"),restartAndRunAllLabel:e=>r.__("Restart Kernel and Run All Cells…"),run:e=>{const{context:t,content:o}=e;return u.NotebookActions.runAndAdvance(o,t.sessionContext).then((()=>{}))},runAll:e=>{const{context:t,content:o}=e;return u.NotebookActions.runAll(o,t.sessionContext).then((()=>{}))},restartAndRunAll:e=>{const{context:t,content:o}=e;return a.restart(t.sessionContext,n).then((e=>(e&&u.NotebookActions.runAll(o,t.sessionContext),e)))}});const i=[y.renderAllMarkdown].map((e=>({command:e}))),b=[y.runAndInsert,y.run,y.runInConsole].map((e=>({command:e}))),m=[y.runAllAbove,y.runAllBelow].map((e=>({command:e}))),p=[y.undoCellAction,y.redoCellAction].map((e=>({command:e}))),k=[y.cut,y.copy,y.pasteBelow,y.pasteAbove,y.pasteAndReplace].map((e=>({command:e}))),C=[y.selectAll,y.deselectAll].map((e=>({command:e}))),g=[y.split,y.merge,y.mergeAbove,y.mergeBelow].map((e=>({command:e}))),x=[y.moveUp,y.moveDown].map((e=>({command:e})));t.editMenu.addGroup(p,4),t.editMenu.addGroup(k,5),t.editMenu.addGroup([{command:y.deleteCell}],6),t.editMenu.addGroup(C,7),t.editMenu.addGroup(x,8),t.editMenu.addGroup(g,9),t.runMenu.addGroup(b,10),t.runMenu.addGroup(m,11),t.runMenu.addGroup(i,12),t.helpMenu.kernelUsers.add({tracker:o,getKernel:e=>{var t;return null===(t=e.sessionContext.session)||void 0===t?void 0:t.kernel}})}(e,d,C,o,b),k.addCommand(y.createNew,{label:e=>{var t,o,n;const l=e.kernelName||"";return e.isLauncher&&e.kernelName&&p.kernelspecs?null!==(n=null===(o=null===(t=p.kernelspecs.specs)||void 0===t?void 0:t.kernelspecs[l])||void 0===o?void 0:o.display_name)&&void 0!==n?n:"":e.isPalette?m.__("New Notebook"):m.__("Notebook")},caption:m.__("Create a new notebook"),icon:e=>e.isPalette?void 0:x.notebookIcon,execute:e=>{return t=e.cwd||(a?a.defaultBrowser.model.path:""),o=e.kernelName||"",k.execute("docmanager:new-untitled",{path:t,type:"notebook"}).then((e=>k.execute("docmanager:open",{path:e.path,factory:M,kernel:{name:o}})));var t,o}}),s&&p.ready.then((()=>{let e=null;const t=()=>{e&&(e.dispose(),e=null);const t=p.kernelspecs.specs;if(!t)return;e=new w.DisposableSet;const o=r.PageConfig.getBaseUrl();for(const n in t.kernelspecs){const l=n===t.default?0:1/0,a=t.kernelspecs[n];let c=a.resources["logo-64x64"];if(c){const e=c.indexOf("kernelspecs");c=r.URLExt.join(o,c.slice(e))}e.add(s.add({command:y.createNew,args:{isLauncher:!0,kernelName:n},category:m.__("Notebook"),rank:l,kernelIconUrl:c,metadata:{kernel:_.JSONExt.deepCopy(a.metadata||{})}}))}};t(),p.kernelspecs.specsChanged.connect(t)})),e.contextMenu.addItem({type:"separator",selector:".jp-Notebook .jp-Cell",rank:0}),e.contextMenu.addItem({command:y.cut,selector:".jp-Notebook .jp-Cell",rank:1}),e.contextMenu.addItem({command:y.copy,selector:".jp-Notebook .jp-Cell",rank:2}),e.contextMenu.addItem({command:y.pasteBelow,selector:".jp-Notebook .jp-Cell",rank:3}),e.contextMenu.addItem({type:"separator",selector:".jp-Notebook .jp-Cell",rank:4}),e.contextMenu.addItem({command:y.deleteCell,selector:".jp-Notebook .jp-Cell",rank:5}),e.contextMenu.addItem({type:"separator",selector:".jp-Notebook .jp-Cell",rank:6}),e.contextMenu.addItem({command:y.split,selector:".jp-Notebook .jp-Cell",rank:7}),e.contextMenu.addItem({command:y.merge,selector:".jp-Notebook .jp-Cell",rank:8}),e.contextMenu.addItem({command:y.mergeAbove,selector:".jp-Notebook .jp-Cell",rank:8}),e.contextMenu.addItem({command:y.mergeBelow,selector:".jp-Notebook .jp-Cell",rank:8}),e.contextMenu.addItem({type:"separator",selector:".jp-Notebook .jp-Cell",rank:9}),e.contextMenu.addItem({command:y.createOutputView,selector:".jp-Notebook .jp-CodeCell",rank:10}),e.contextMenu.addItem({type:"separator",selector:".jp-Notebook .jp-CodeCell",rank:11}),e.contextMenu.addItem({command:y.clearOutputs,selector:".jp-Notebook .jp-CodeCell",rank:12}),e.contextMenu.addItem({command:y.clearAllOutputs,selector:".jp-Notebook",rank:0}),e.contextMenu.addItem({type:"separator",selector:".jp-Notebook",rank:1}),e.contextMenu.addItem({command:y.enableOutputScrolling,selector:".jp-Notebook",rank:2}),e.contextMenu.addItem({command:y.disableOutputScrolling,selector:".jp-Notebook",rank:3}),e.contextMenu.addItem({type:"separator",selector:".jp-Notebook",rank:4}),e.contextMenu.addItem({command:y.undoCellAction,selector:".jp-Notebook",rank:5}),e.contextMenu.addItem({command:y.redoCellAction,selector:".jp-Notebook",rank:6}),e.contextMenu.addItem({command:y.restart,selector:".jp-Notebook",rank:7}),e.contextMenu.addItem({type:"separator",selector:".jp-Notebook",rank:8}),e.contextMenu.addItem({command:y.createConsole,selector:".jp-Notebook",rank:9}),C},autoStart:!0},O={id:"@jupyterlab/notebook-extension:factory",provides:u.NotebookPanel.IContentFactory,requires:[a.IEditorServices],autoStart:!0,activate:(e,t)=>{const o=t.factoryService.newInlineEditor;return new u.NotebookPanel.ContentFactory({editorFactory:o})}},j={activate:function(e,t,o,n,l,a){const r=l.load("jupyterlab"),s="notebook-tools",c=new u.NotebookTools({tracker:t,translator:l}),d=new u.NotebookTools.ActiveCellTool,i=u.NotebookTools.createSlideShowSelector(l),b=o.factoryService.newInlineEditor,m=new u.NotebookTools.CellMetadataEditorTool({editorFactory:b,collapsed:!1,translator:l}),p=new u.NotebookTools.NotebookMetadataEditorTool({editorFactory:b,translator:l});return e.serviceManager.nbconvert.getExportFormats().then((e=>{if(e){const t=["pdf","slides","script","notebook","custom"];let o=[[r.__("PDF"),"pdf"],[r.__("Slides"),"slides"],[r.__("Script"),"script"],[r.__("Notebook"),"notebook"],[r.__("Custom"),"custom"]];const n=Object.keys(e),a=W.getFormatLabels(l);n.forEach((function(n){if(-1===t.indexOf(n)){const t=r.__(n[0].toUpperCase()+n.substr(1)),l=a[n]?a[n]:t,s=e[n].output_mimetype;o.push([l,s])}}));const s=u.NotebookTools.createNBConvertSelector(o,l);c.addItem({tool:s,section:"common",rank:3})}})),c.title.icon=x.buildIcon,c.title.caption=r.__("Notebook Tools"),c.id=s,c.addItem({tool:d,section:"common",rank:1}),c.addItem({tool:i,section:"common",rank:2}),c.addItem({tool:m,section:"advanced",rank:1}),c.addItem({tool:p,section:"advanced",rank:2}),h.MessageLoop.installMessageHook(c,((e,t)=>{switch(t.type){case"activate-request":n.save(s,{open:!0});break;case"after-hide":case"close-request":n.remove(s)}return!0})),a&&t.widgetAdded.connect(((e,t)=>{a.register(t).render(c)})),c},provides:u.INotebookTools,id:"@jupyterlab/notebook-extension:tools",autoStart:!0,requires:[u.INotebookTracker,a.IEditorServices,k.IStateDB,g.ITranslator],optional:[b.IPropertyInspectorProvider]},T={id:"@jupyterlab/notebook-extension:mode-status",autoStart:!0,requires:[u.INotebookTracker,g.ITranslator],optional:[C.IStatusBar],activate:(e,t,o,n)=>{if(!n)return;const{shell:l}=e,a=new u.CommandEditStatus(o);t.currentChanged.connect((()=>{const e=t.currentWidget;a.model.notebook=e&&e.content})),n.registerStatusItem("@jupyterlab/notebook-extension:mode-status",{item:a,align:"right",rank:4,isActive:()=>!!l.currentWidget&&!!t.currentWidget&&l.currentWidget===t.currentWidget})}},R={id:"@jupyterlab/notebook-extension:export",autoStart:!0,requires:[g.ITranslator,u.INotebookTracker],optional:[i.IMainMenu,l.ICommandPalette],activate:(e,t,o,n,l)=>{const a=t.load("jupyterlab"),{commands:s,shell:c}=e,d=e.serviceManager;s.addCommand(y.exportToFormat,{label:e=>{const t=e.label;return e.isPalette?a.__("Export Notebook: %1",t):t},execute:e=>{const t=D(o,c,e);if(!t)return;const n=r.PageConfig.getNBConvertURL({format:e.format,download:!0,path:t.context.path}),l=window.open("","_blank"),{context:a}=t;return l&&(l.opener=null),a.model.dirty&&!a.model.readOnly?a.save().then((()=>{null==l||l.location.assign(n)})):new Promise((e=>{null==l||l.location.assign(n),e(void 0)}))},isEnabled:()=>W.isEnabled(c,o)});const i=new f.Menu({commands:s});i.title.label=a.__("Export Notebook As…"),d.nbconvert.getExportFormats().then((e=>{if(e){const o=W.getFormatLabels(t);if(Object.keys(e).forEach((function(e){const t=a.__(e[0].toUpperCase()+e.substr(1)),n=o[e]?o[e]:t;let r={format:e,label:n,isPalette:!1};if(-1===S.indexOf(e)&&(i.addItem({command:y.exportToFormat,args:r}),l)){r={format:e,label:n,isPalette:!0};const t=a.__("Notebook Operations");l.addItem({command:y.exportToFormat,category:t,args:r})}})),n){const e=[{type:"submenu",submenu:i}];n.fileMenu.addGroup(e,10)}}}))}},B={id:"@jupyterlab/notebook-extension:trust-status",autoStart:!0,requires:[u.INotebookTracker,g.ITranslator],optional:[C.IStatusBar],activate:(e,t,o,n)=>{if(!n)return;const{shell:l}=e,a=new u.NotebookTrustStatus(o);t.currentChanged.connect((()=>{const e=t.currentWidget;a.model.notebook=e&&e.content})),n.registerStatusItem("@jupyterlab/notebook-extension:trust-status",{item:a,align:"right",rank:3,isActive:()=>!!l.currentWidget&&!!t.currentWidget&&l.currentWidget===t.currentWidget})}},L={id:"@jupyterlab/notebook-extension:widget-factory",provides:u.INotebookWidgetFactory,requires:[u.NotebookPanel.IContentFactory,a.IEditorServices,m.IRenderMimeRegistry,l.ISessionContextDialogs,g.ITranslator],activate:function(e,t,o,n,l,a){const r=new u.NotebookWidgetFactory({name:M,fileTypes:["notebook"],modelName:"notebook",defaultFor:["notebook"],preferKernel:!0,canStartKernel:!0,rendermime:n,contentFactory:t,editorConfig:u.StaticNotebook.defaultEditorConfig,notebookConfig:u.StaticNotebook.defaultNotebookConfig,mimeTypeService:o.mimeTypeService,sessionDialogs:l,translator:a});return e.docRegistry.addWidgetFactory(r),r},autoStart:!0},P={id:"@jupyterlab/notebook-extension:cloned-outputs",requires:[s.IDocumentManager,u.INotebookTracker,g.ITranslator],optional:[n.ILayoutRestorer],activate:function(e,t,o,n,a){const r=n.load("jupyterlab"),s=new l.WidgetTracker({namespace:"cloned-outputs"});a&&a.restore(s,{command:y.createOutputView,args:e=>({path:e.content.path,index:e.content.index}),name:e=>`${e.content.path}:${e.content.index}`,when:o.restored});const{commands:c,shell:d}=e;c.addCommand(y.createOutputView,{label:r.__("Create New View for Output"),execute:async e=>{var a;let r,c;const d=e.path;let i=e.index;if(d&&null!=i){if(c=t.findWidget(d,M),!c)return}else{if(c=o.currentWidget,!c)return;r=c.content.activeCell,i=c.content.activeCellIndex}const u=new W.ClonedOutputArea({notebook:c,cell:r,index:i,translator:n}),b=new l.MainAreaWidget({content:u});c.context.addSibling(b,{ref:c.id,mode:"split-bottom"});const m=()=>{s.save(b)};c.context.pathChanged.connect(m),null===(a=c.context.model)||void 0===a||a.cells.changed.connect(m),s.add(b),c.content.disposed.connect((()=>{var e;c.context.pathChanged.disconnect(m),null===(e=c.context.model)||void 0===e||e.cells.changed.disconnect(m),b.dispose()}))},isEnabled:()=>W.isEnabledAndSingleSelected(d,o)})},autoStart:!0},K={id:"@jupyterlab/notebook-extension:code-console",requires:[u.INotebookTracker,g.ITranslator],activate:function(e,t,o){const n=o.load("jupyterlab"),{commands:l,shell:a}=e,r=()=>W.isEnabled(a,t);l.addCommand(y.createConsole,{label:n.__("New Console for Notebook"),execute:e=>{const o=t.currentWidget;if(o)return W.createConsole(l,o,e.activate)},isEnabled:r}),l.addCommand(y.runInConsole,{label:n.__("Run Selected Text or Current Line in Console"),execute:async e=>{var o,n;const a=t.currentWidget;if(!a)return;const{context:r,content:s}=a,c=s.activeCell,d=null==c?void 0:c.model.metadata.toJSON(),i=r.path;if(!c||"code"!==c.model.type)return;let u;const b=c.editor,m=b.getSelection(),{start:p,end:k}=m;if(p.column!==k.column||p.line!==k.line){const e=b.getOffsetAt(m.start),t=b.getOffsetAt(m.end);u=b.model.value.text.substring(e,t)}else{const e=b.getCursorPosition(),t=b.model.value.text.split("\n");let l=m.start.line;for(;l<b.lineCount&&!t[l].replace(/\s/g,"").length;)l+=1;let r=l>0,s=0,c=s+1;for(;;){u=t.slice(s,c).join("\n");const d=await(null===(n=null===(o=a.context.sessionContext.session)||void 0===o?void 0:o.kernel)||void 0===n?void 0:n.requestIsComplete({code:u+"\n\n"}));if("complete"===(null==d?void 0:d.content.status)){if(l<c){for(;c<b.lineCount&&!t[c].replace(/\s/g,"").length;)c+=1;b.setCursorPosition({line:c,column:e.column});break}s=c,c=s+1}else if(c<b.lineCount)c+=1;else{if(!r){for(u=t[l];l+1<b.lineCount&&!t[l+1].replace(/\s/g,"").length;)l+=1;b.setCursorPosition({line:l+1,column:e.column});break}s=l,c=l+1,r=!1}}}u&&(await l.execute("console:open",{activate:!1,insertMode:"split-bottom",path:i}),await l.execute("console:inject",{activate:!1,code:u,path:i,metadata:d}))},isEnabled:r})},autoStart:!0},F=[O,I,R,j,T,B,L,E,P,K];function D(e,t,o){const n=e.currentWidget;return!1!==o.activate&&n&&t.activateById(n.id),n}var W;!function(e){e.createConsole=function(e,t,o){const n={path:t.context.path,preferredLanguage:t.context.model.defaultKernelLanguage,activate:o,ref:t.id,insertMode:"split-bottom"};return e.execute("console:create",n)},e.isEnabled=function(e,t){return null!==t.currentWidget&&t.currentWidget===e.currentWidget},e.isEnabledAndSingleSelected=function(t,o){if(!e.isEnabled(t,o))return!1;const{content:n}=o.currentWidget,l=n.activeCellIndex;for(let e=0;e<n.widgets.length;++e)if(n.isSelected(n.widgets[e])&&e!==l)return!1;return!0},e.getFormatLabels=function(e){const t=(e=e||g.nullTranslator).load("jupyterlab");return{html:t.__("HTML"),latex:t.__("LaTeX"),markdown:t.__("Markdown"),pdf:t.__("PDF"),rst:t.__("ReStructured Text"),script:t.__("Executable Script"),slides:t.__("Reveal.js Slides")}};class t extends f.Panel{constructor(e){super(),this._cell=null;const t=(e.translator||g.nullTranslator).load("jupyterlab");this._notebook=e.notebook,this._index=void 0!==e.index?e.index:-1,this._cell=e.cell||null,this.id=`LinkedOutputView-${_.UUID.uuid4()}`,this.title.label="Output View",this.title.icon=x.notebookIcon,this.title.caption=this._notebook.title.label?t.__("For Notebook: %1",this._notebook.title.label):t.__("For Notebook:"),this.addClass("jp-LinkedOutputView"),this._notebook.context.ready.then((()=>{if(this._cell||(this._cell=this._notebook.content.widgets[this._index]),!this._cell||"code"!==this._cell.model.type)return void this.dispose();const e=this._cell.cloneOutputArea();this.addWidget(e)}))}get index(){return this._cell?A.ArrayExt.findFirstIndex(this._notebook.content.widgets,(e=>e===this._cell)):this._index}get path(){return this._notebook.context.path}}e.ClonedOutputArea=t}(W||(W={}))}}]);
//# sourceMappingURL=8389.bundle.js.map