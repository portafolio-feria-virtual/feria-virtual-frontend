import { createAvatar as avatarDicebear } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-initials-sprites';

export const Avatar = ({ seed }: { seed: string }) => {
  const createAvatar = (seed: string) => {
    const avatar = avatarDicebear(style, {
      seed,
      dataUri: true,
      width: 40
    });

    return avatar;
  };

  return <img src={createAvatar(seed)} alt={createAvatar(seed)} className="rounded-full" />;
};
