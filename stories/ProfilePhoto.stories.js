import React from 'react';
import ProfilePhoto from '../comps/ProfilePhoto';

export default {
    title: 'ProfilePhoto/ProfilePhoto',
    component: ProfilePhoto,
};

export const UploadProfilePhoto = () => <ProfilePhoto />;
export const ProfilePhotoImg = () => <ProfilePhoto profileimg={true} choosefile={false} />;
