import { notification } from 'antd';
import { NotificationPlacement, NotificationInstance } from 'antd/lib/notification';

interface INotify {
  message: any;
  description?: any;
  type: string;
  placement?: NotificationPlacement;
  duration?: number;
}

const notify = ({
  message,
  description,
  type = 'info',
  placement = 'topRight',
  duration = 4.5,
}: INotify) => notification[type as keyof NotificationInstance]({
  description: typeof description === 'object' ? description : <div dangerouslySetInnerHTML={{ __html: description }} />,
  message: typeof message === 'object' ? message : <div dangerouslySetInnerHTML={{ __html: message }} />,
  placement,
  duration
});

export default notify;
