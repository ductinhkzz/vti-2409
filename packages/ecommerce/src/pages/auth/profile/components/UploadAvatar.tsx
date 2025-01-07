import { useRef, useState } from 'react';

import { Button, Input, LoadingWrapper, Typography, UserAvatar } from '@/components';
import { useToast, useUser } from '@/hooks';
import {
  useDeleteFileMutation,
  useLazyGetMeQuery,
  useUpdateProfileMutation,
  useUploadFileMutation,
} from '@/redux/auth';
import { getMediaUrl } from '@/utils';

const UploadAvatar = () => {
  const { toast } = useToast();
  const [avatar, setAvatar] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const [getMe] = useLazyGetMeQuery();
  const [uploadFile] = useUploadFileMutation();
  const [deleteFile] = useDeleteFileMutation();
  const [updateProfile] = useUpdateProfileMutation();
  const inputRef = useRef<HTMLInputElement>(null);
  const name = user?.name ?? user?.username;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const file = files[0];

    setAvatar(file);
  };

  const onClickFileUpload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!inputRef.current) return;

    inputRef.current.click();
  };

  const onClickUpload = async () => {
    if (!avatar || !user) return;
    setLoading(true);
    const form = new FormData();
    form.append('files', avatar);
    form.append('path', 'avatar');
    const res = await uploadFile(form).unwrap();
    if (user.avatar) {
      await deleteFile(user.avatar.id).unwrap();
    }
    await updateProfile({ id: user.id, avatar: res[0].id }).unwrap();
    toast({ title: 'Profile', description: 'Update avatar successfully!' });
    setAvatar(null);
    await getMe().unwrap();
    setLoading(false);
  };

  const onCancelUpload = () => {
    setAvatar(null);
  };
  return (
    <LoadingWrapper loading={loading}>
      <div className='flex gap-4'>
        <UserAvatar
          url={avatar ? URL.createObjectURL(avatar) : user?.avatar?.url && getMediaUrl(user?.avatar?.url)}
          alt={name}
          size='lg'
        />
        <div className='flex flex-col gap-2'>
          <Typography text={name} fixedSize='font-bold' useCurrentColor />
          <div className='flex gap-2'>
            <Input
              id='avatar'
              type='file'
              ref={inputRef}
              onChange={handleFileUpload}
              className='hidden'
              accept='image/*'
            />
            <Button size='sm' variant='outline' onClick={onClickFileUpload}>
              {avatar ? `Selected file: ${avatar.name}` : 'Select file'}
            </Button>
            {avatar && (
              <Button size='sm' onClick={onCancelUpload}>
                Cancel
              </Button>
            )}
            <Button size='sm' onClick={onClickUpload} disabled={!avatar}>
              Upload
            </Button>
          </div>
        </div>
      </div>
    </LoadingWrapper>
  );
};

export { UploadAvatar };
