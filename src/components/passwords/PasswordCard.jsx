import React from 'react';

const style = {
  span: {
    fontWeight: '700'
  }
};

export default function PasswordCard(props) {
  const { name, username, password, link, color } = props;
  return (
    <div className="container my-5">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">
                <span style={style.span}>{username}</span> {password}
              </p>
              <a
                href={`http://${username}:${password}@${link}/`}
                target="_blank"
                rel="noreferrer"
                class={color}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
