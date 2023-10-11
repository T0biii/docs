import React from 'react';

function UsedBy(props) {
  const { logos, sectionTagline, classes } = props;

  const tagline = sectionTagline ?? 'Used by teams at';

  if (logos && logos.length) {
    return (
      <div className={classes ? `used-by ${classes}` : 'used-by'}>
        <div className="container">
          <p className="tagline">{tagline}</p>
          <ul>
            {logos.map((name) => (
              <li key={name}>
                <img src={`/docs/img/users/${name}`} alt={`${name} logo`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className={classes ? `used-by ${classes}` : 'used-by'}>
      <div className="container">
        <p className="tagline">{tagline}</p>
        <ul>
          <li>
            <img src="/docs/img/users/gitlab.svg" alt="GitLab logo" />
          </li>
          <li>
            <img src="/docs/img/users/hpe.svg" alt="HPE logo" />
          </li>
          <li>
            <img src="/docs/img/users/mango.svg" alt="Mango logo" />
          </li>
          <li>
            <img src="/docs/img/users/bmw.svg" alt="BMW logo" />
          </li>
          <li>
            <img src="/docs/img/users/hellofresh.png" alt="HelloFresh logo" />
          </li>
          <li>
            <img src="/docs/img/users/clariant.png" alt="Clariant logo" />
          </li>
          <li>
            <img src="/docs/img/users/accenture.svg" alt="Accenture logo" />
          </li>
          <li>
            <img src="/docs/img/users/dazn.svg" alt="DAZN logo" />
          </li>
          <li>
            <img src="/docs/img/users/daimler.svg" alt="Daimler logo" />
          </li>
          <li>
            <img src="/docs/img/users/picpay.svg" alt="PicPay logo" />
          </li>
          <li>
            <img src="/docs/img/users/jpmorgan.svg" alt="J.P. Morgan logo" />
          </li>
          <li>
            <img src="/docs/img/users/nbc_sports_group.png" alt="NBC Sports Group logo" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UsedBy;
