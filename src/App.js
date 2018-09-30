import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <bs-collapse class="collapse bg-dark" id="navbarHeader">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4 className="text-white">React BS-Components Example</h4>
                  <p className="text-muted">
                    This is a React example project using bs-components.  BS-Components is a web component library version of the
                    bootstrap jQuery plugins except that it does not use jQuery.
                  </p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4 className="text-white">Resources</h4>
                  <ul className="list-unstyled">
                      <li><a href="https://bs-components.github.io/example-projects/vue/" className="text-white">Documentation</a></li>
                    <li><a href="https://github.com/bs-components/bs-components" className="text-white">bs-components Github</a></li>
                    <li><a href="https://github.com/jasoncubic" className="text-white">Author</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </bs-collapse>
          <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container d-flex justify-content-between">
              <div className="navbar-brand d-flex align-items-center">
                <strong>bs-components</strong>
              </div>
              <bs-button role="button" class="btn navbar-toggler" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </bs-button>
            </div>
          </div>
        </header>

        <div className="container my-5">
          <h2>Alerts</h2>

          <bs-alert class="alert alert-primary alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </bs-alert>

          <bs-alert class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </bs-alert>

          <hr />


          <h2>Buttons</h2>

          <bs-button role="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off">
            Single toggle
          </bs-button>

          <p>&nbsp;</p>

          <div className="btn-group-toggle" data-toggle="buttons">
            <bs-button v-pre class="btn btn-secondary active">
              <input type="checkbox" defaultChecked autoComplete="off" /> Checked
            </bs-button>
          </div>
          <p>&nbsp;</p>


          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <bs-button active class="btn btn-secondary active">
              <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Active
            </bs-button>
            <bs-button class="btn btn-secondary">
              <input type="radio" name="options" id="option2" autoComplete="off" /> Radio
            </bs-button>
            <bs-button class="btn btn-secondary">
              <input type="radio" name="options" id="option3" autoComplete="off" /> Radio
            </bs-button>
          </div>

          <hr />



          <h2>Collapse</h2>
          <p>
            <bs-button tabindex="-1">
              <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Link with href
              </a>
            </bs-button>
            <bs-button tabindex="-1">
              <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Button with data-target
              </button>
            </bs-button>
            <bs-button role="button" class="btn btn-primary" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              bs-button with data-target
            </bs-button>
          </p>

          <bs-collapse class="collapse" id="collapseExample">
            <div className="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </bs-collapse>

          <p>
            <bs-button tabindex="-1">
              <a className="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                  Toggle first element
              </a>
            </bs-button>
            <bs-button tabindex="-1">
              <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                Toggle second element
              </button>
            </bs-button>
            <bs-button role="button" class="btn btn-primary" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">
              Toggle both elements
            </bs-button>
          </p>

          <div className="row">
            <div className="col">
              <bs-collapse class="collapse multi-collapse" id="multiCollapseExample1">
                <div className="card card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
              </bs-collapse>
            </div>
            <div className="col">
              <bs-collapse class="collapse multi-collapse" id="multiCollapseExample2">
                <div className="card card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
              </bs-collapse>
            </div>
          </div>

          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <bs-button class="btn btn-link" role="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Collapsible Group Item #1
                  </bs-button>
                </h5>
              </div>
              <bs-collapse id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </bs-collapse>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <bs-button class="btn btn-link collapsed" role="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Collapsible Group Item #2
                  </bs-button>
                </h5>
              </div>
              <bs-collapse id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </bs-collapse>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <bs-button class="btn btn-link collapsed" role="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Collapsible Group Item #3
                  </bs-button>
                </h5>
              </div>
              <bs-collapse id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </bs-collapse>
            </div>
          </div>

          <hr />
          <h2>Dropdowns</h2>

          <bs-dropdown class="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href={null}>Action</a>
              <a className="dropdown-item" href={null}>Another action</a>
              <a className="dropdown-item" href={null}>Something else here</a>
            </div>
          </bs-dropdown>
          <p>&nbsp;</p>

          <bs-dropdown class="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href={null} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href={null}>Action</a>
              <a className="dropdown-item" href={null}>Another action</a>
              <a className="dropdown-item" href={null}>Something else here</a>
            </div>
          </bs-dropdown>
          <p>&nbsp;</p>


          <bs-dropdown class="btn-group dropright">
            <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">dropright</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href={null}>Action</a>
              <a className="dropdown-item" href={null}>Another action</a>
              <a className="dropdown-item" href={null}>Something else here</a>
            </div>
          </bs-dropdown>

          <bs-dropdown class="btn-group dropup">
            <button type="button" className="btn btn-secondary">
              Split dropup
            </button>
            <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href={null}>Action</a>
              <a className="dropdown-item" href={null}>Another action</a>
              <a className="dropdown-item" href={null}>Something else here</a>
            </div>
          </bs-dropdown>

          <bs-dropdown class="btn-group dropleft">
            <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">dropleft</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href={null}>Action</a>
              <a className="dropdown-item" href={null}>Another action</a>
              <a className="dropdown-item" href={null}>Something else here</a>
            </div>
          </bs-dropdown>

          <hr />

          <h2>Modals</h2>
          {/* <!-- bs-button trigger modal --> */}
          <bs-button role="button" class="btn btn-primary" data-toggle="modal" data-target="#basicModal">
              Launch demo modal
          </bs-button>

          {/* <!-- Modal --> */}
          <bs-modal class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="basicModalLabel">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </bs-modal>

          {/* <!-- bs-button trigger modal --> */}
          <bs-button role="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Launch modal with popover
          </bs-button>

          {/* <!-- Modal --> */}
          <bs-modal class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title (with popover within)</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <bs-tooltip class="btn btn-secondary" data-container="body" data-toggle="popover" title="popover" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                    Popover
                  </bs-tooltip>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </bs-modal>

          <hr />
          <h2>Popovers</h2>

          <bs-tooltip class="btn btn-secondary" data-container="body" data-toggle="popover" bs-title="" bs-content="" data-placement="top" data-title="abc123" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on top
          </bs-tooltip>

          <bs-tooltip class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on right
          </bs-tooltip>

          <bs-tooltip class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
          sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on bottom
          </bs-tooltip>

          <bs-tooltip class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on left
          </bs-tooltip>

          <bs-tooltip class="btn btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</bs-tooltip>

          <bs-tooltip class="d-inline-block" data-toggle="popover" data-content="Disabled popover">
            <button className="btn btn-primary" style={{pointerEvents: 'none'}} type="button" disabled>Disabled button</button>
          </bs-tooltip>

          <hr />

          <h2>Scrollspy</h2>

          <nav className="navbar">
            <ul id="scrollspy-example-navbar" className="nav nav-pills">
              <li className="nav-item"><a className="nav-link" href="#div-1">div 1</a></li>
              <li className="nav-item"><a className="nav-link" href="#div-2">div 2</a></li>
              <li className="nav-item"><a className="nav-link" href="#div-3">div 3</a></li>
              <li className="nav-item"><a className="nav-link" href="#div-4">div 4</a></li>
              <li className="nav-item"><a className="nav-link" href="#div-5">div 5</a></li>
              <li className="nav-item"><a className="nav-link" href="#div-6">div 6</a></li>
            </ul>
          </nav>
          <bs-scrollspy verbose-logging data-spy="scroll" data-target="#scrollspy-example-navbar" data-offset="0"
          style={{position: 'relative', overflow: 'auto', height: '200px'}}>
            <div id="div-1">
              <h3>div 1</h3>
              <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
            </div>
            <div id="div-2">
              <h3>div 2</h3>
              <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
            </div>
            <div id="div-3">
              <h3>div 3</h3>
              <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.</p>
            </div>
            <div id="div-4">
              <h3>div 4</h3>
              <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>
            </div>
            <div id="div-5">
              <h3>div 5</h3>
              <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
            </div>
            <div id="div-6">
              <h3>div 6</h3>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
            </div>
          </bs-scrollspy>
          <hr />


          <h2>Tabs</h2>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <bs-button tabindex="-1">
                <a className="nav-link active" data-toggle="tab" href="#tab1" role="tab" aria-controls="home" aria-selected="true">Tab 1</a>
              </bs-button>
            </li>
            <li className="nav-item">
              <bs-button tabindex="-1">
                <a className="nav-link" data-toggle="tab" href="#tab2" role="tab" aria-controls="profile" aria-selected="false">Tab 2</a>
              </bs-button>
            </li>
            <li className="nav-item">
              <bs-button tabindex="-1">
                <a className="nav-link" data-toggle="tab" href="#tab3" role="tab" aria-controls="contact" aria-selected="false">Tab 3</a>
              </bs-button>
            </li>
          </ul>
          <div className="tab-content">
            <bs-tab class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </bs-tab>
            <bs-tab class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </bs-tab>
            <bs-tab class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </bs-tab>
          </div>

          <hr />

          <h2>Tooltips</h2>

          <bs-tooltip id="top-tooltip-button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" data-title="override" title="Tooltip on top">
            Tooltip on top
          </bs-tooltip>
          <bs-tooltip id="right-tooltip-button" class="btn btn-secondary" data-dispose-time-to-wait="0" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
            Tooltip on right
          </bs-tooltip>
          <bs-tooltip id="bottom-tooltip-button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
            Tooltip on bottom
          </bs-tooltip>
          <bs-tooltip class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
            Tooltip on left
          </bs-tooltip>
          <bs-tooltip id="tooltip-with-html" class="btn btn-secondary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
            Tooltip with HTML
          </bs-tooltip>
          <bs-tooltip class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Disabled tooltip">
            <button className="btn btn-primary" style={{pointerEvents: 'none'}} type="button" disabled>Disabled button</button>
          </bs-tooltip>

          <hr />
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>

        </div>
      </div>
    );
  }
}

export default App;
