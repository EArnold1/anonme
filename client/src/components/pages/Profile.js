import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { share } from '../../actions/message';

const Profile = ({ user, share }) => {
  //Copy logic
  const [clip, setClip] = useState({
    copied: false,
    value: `${window.location.hostname}/message/`,
  });
  const { value, copied } = clip;

  const onCopy = () => {
    setClip({ ...clip, copied: true });
    setTimeout(() => {
      setClip({ ...clip, copied: false });
    }, 2000);
  };

  const [shareData, setShareData] = useState({
    title: 'ANONME PROFILE LINK',
    text: 'Share to friends',
    url: `/message/${user !== null && user.userName}`,
  });

  const shareProfile = async (e) => {
    e.preventDefault();
    share(shareData);
  };

  return (
    <section className="container-fluid px-0">
      <h3 className="text-center m-4">
        Welcome {user !== null && user.userName}
      </h3>
      <div className="mx-auto container">
        {user !== null && (
          <CopyToClipboard text={value} onCopy={onCopy}>
            <p className="p-2 l copy rounded d-md-inline">
              <i className="fas fa-share-alt"></i>{' '}
              {`http://${value}${user.userName}`}{' '}
              <i className="far fa-copy"></i>
            </p>
          </CopyToClipboard>
        )}{' '}
        {copied ? <span className="mx-3 text-success">Copied </span> : ''}
        <p className="texth mt-4">
          {' '}
          Share your profile link to get responses from your friend. Go to "View
          Messages" to check out the responses.
        </p>
      </div>
      <br />
      <div className="row container mx-auto texth">
        <p className="light text-center l p-2 col-sm-12 m-1 rounded">
          <Link to="/me/messages">
            {' '}
            view messages <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </p>
        <p
          className="light text-center text-primary l p-2 col-sm-12 m-1 rounded"
          onClick={shareProfile}
        >
          <span className="ex">
            {' '}
            <i className="fas fa-share-alt"></i> Share my profile
          </span>
        </p>
        <p className="light text-center l p-2 col-sm-12 m-1 rounded">
          <a
            href={`whatsapp://send?text=write a secret anonymous message to me... be anonymous, click link https://${
              window.location.hostname
            }/message/${user !== null && user.userName}`}
            target="_blank"
            data-action="share/whatsapp/share"
            target="_blank"
          >
            <i className="fab fa-whatsapp"></i> Share via Whatsapp
          </a>
        </p>
        <p className="light text-center l p-2 col-sm-12 m-1 rounded">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://${
              window.location.hostname
            }/message/${
              user !== null && user.userName
            }&t=Send me anonymous message`}
            target="_blank"
            title="Share on Facebook"
          >
            <i className="fab fa-facebook"></i> Share on facebook
          </a>
        </p>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { share })(Profile);
