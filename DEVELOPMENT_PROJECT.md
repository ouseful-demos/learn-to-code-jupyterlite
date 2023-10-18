# Development Project

The original *Learn to Code for Data Analysis* project materials were written as a set of *instructional activity* Microsoft Word documents that were transformed to OU-XML and published via the OpenLearn Moodle VLE, and a set of *practical activity* Jupyter notebooks. Students were advised to run the notebooks either via local Anaconda installation, or using the online CoCalc service. The notebooks could also be run via MyBinder.

The *Learn to Code for Data Analysis* materials in this repository are being reworked to explore a new workflow:

- the *instructional activity* materials are transformed to MyST markdown (in part using tooling that is being developed in [`innovationOUtside/ou-xml-validator`](https://github.com/innovationOUtside/ou-xml-validator))
- *instructional activity* materials are edited and developed either in a markdown editor or (via Jupytext) as Jupyter notebooks; these materials can then be transformed using Sphinx to HTML or (using tooling in [`innovationOUtside/ou-xml-validator`](https://github.com/innovationOUtside/ou-xml-validator)) OU-XML; several OU-XML tag extensions are supported by the [`innovationOUtside/sphinxcontrib-ou-xml-tags`](https://github.com/innovationOUtside/sphinxcontrib-ou-xml-tags) Sphinx extension (under development); instructional activity may include executable code, the outputs of which can be rendered into the generated HTML/OU-XML;
- *instructional material published as Jupyter Book HTML may  include executable content supported by [`executablebooks/thebe`](https://github.com/executablebooks/thebe); code can be executed, or edited and executed, within a webpage using an in browser, JupyterLite WASM based engine
- *practical activity* Jupyter notebooks can be executed via a JupyterLite JupyterLab environment running within a web-browser. Code execution is supported purely within the browser via a WASM based code execution engine. Notebook edits can be saved to browser storage. Notebooks can be individually uploaded to and downloaded from the environment by users, allowing them to import their own notebooks, and save their edited notebooks back to their desktop.

The Jupyter Book HTML and JupyterLite environments can be served from a standard webserver. An under-development demo environment is published from [this repository](https://github.com/ouseful-demos/learn-to-code-jupyterlite/) via Github Pages. The publication process is automated from the repository contents using Github Actions ([example](https://github.com/ouseful-demos/learn-to-code-jupyterlite/blob/main/.github/workflows/deploy.yml)):

- [example Jupyter Book HTML](https://ouseful-demos.github.io/learn-to-code-jupyterlite/)
- [example JupyterLite JupyterLab environment](https://ouseful-demos.github.io/learn-to-code-jupyterlite/jupyterlite/)
