import React from 'react'


const LayoutMain = () => {
  return (
    <div>
        <div class="main ">
              <div class="container-fluid px-0 bg-menu">
                  <ul class="main-menu  nav row gx-0 text-center">
                      <li class="col-4">
                          <a href="" class="d-block text-dark p-3">
                              <img src="../../images/robert/layout/icon2.svg" alt=""/>
                              詳細解說
                          </a>
                      </li>
                      <li class="col-4">
                        <a href="" class="d-block text-dark p-3">
                            <img src="../../images/robert/layout/icon1.svg" alt=""/>
                            客製化教學
                        </a>
                    </li>
                    <li class="col-4">
                        <a href="" class="d-block text-dark p-3">
                            <img src="../../images/robert/layout/icon3.svg" alt=""/>
                            測量教學
                        </a>
                    </li>
                  </ul>
              </div>
          </div>
    </div>
  )
}

export default LayoutMain