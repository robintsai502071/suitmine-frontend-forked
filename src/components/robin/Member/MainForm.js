import React from 'react';

function MainForm() {
  return (
    <div>
      <div class="row">
        <div class="col">
          <label htmlFor="username">中文姓名</label>
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            id="username"
            value={`蔡洧洧`}
          />
        </div>

        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
      </div>
    </div>
  );
}

export default MainForm;
