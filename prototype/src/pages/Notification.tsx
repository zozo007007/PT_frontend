import { Container, Grid, Typography, Box, List, ListItem, ListItemText, ListItemIcon, Chip, Divider, IconButton } from '@mui/material';
import { Notifications as NotificationsIcon, NotificationsActive as NotificationsActiveIcon, Circle as CircleIcon } from '@mui/icons-material';
import { useState } from 'react';

interface Notification {
  id: number;
  title: string;
  content: string;
  type: '系统通知' | '活动通知';
  isRead: boolean;
  time: string;
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    title: '系统维护通知',
    content: '系统将于2024年2月1日凌晨2:00-4:00进行例行维护，期间可能影响部分功能的使用。',
    type: '系统通知',
    isRead: false,
    time: '2024-01-20 10:00',
  },
  {
    id: 2,
    title: '新年活动上线',
    content: '2024新年特别活动现已上线，参与活动即可获得丰富奖励！',
    type: '活动通知',
    isRead: false,
    time: '2024-01-19 15:30',
  },
  {
    id: 3,
    title: '账号安全提醒',
    content: '检测到您的账号在异地登录，如非本人操作，请及时修改密码。',
    type: '系统通知',
    isRead: true,
    time: '2024-01-18 20:15',
  },
];

const Notification = () => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const handleMarkAsRead = (id: number) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
  };

  const getUnreadCount = (type: '系统通知' | '活动通知') => {
    return notifications.filter(n => n.type === type && !n.isRead).length;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {/* 系统通知 */}
        <Grid item xs={12}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <NotificationsIcon sx={{ mr: 1 }} />
              系统通知
              {getUnreadCount('系统通知') > 0 && (
                <Chip
                  label={getUnreadCount('系统通知')}
                  color="error"
                  size="small"
                  sx={{ ml: 1 }}
                />
              )}
            </Typography>
            <List>
              {notifications
                .filter(notification => notification.type === '系统通知')
                .map(notification => (
                  <Box key={notification.id}>
                    <ListItem
                      sx={{
                        bgcolor: notification.isRead ? 'transparent' : 'action.hover',
                        borderRadius: 1,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'action.selected',
                        },
                      }}
                    >
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: notification.isRead ? 'text.disabled' : 'primary.main',
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" sx={{ fontWeight: notification.isRead ? 'normal' : 'bold' }}>
                            {notification.title}
                          </Typography>
                        }
                        secondary={
                          <Box>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                              {notification.content}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {notification.time}
                            </Typography>
                          </Box>
                        }
                      />
                      {!notification.isRead && (
                        <IconButton
                          size="small"
                          onClick={() => handleMarkAsRead(notification.id)}
                          sx={{ ml: 1 }}
                        >
                          <NotificationsActiveIcon />
                        </IconButton>
                      )}
                    </ListItem>
                    <Divider sx={{ my: 2 }} />
                  </Box>
                ))}
            </List>
          </Box>
        </Grid>

        {/* 活动通知 */}
        <Grid item xs={12}>
          <Box>
            <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <NotificationsIcon sx={{ mr: 1 }} />
              活动通知
              {getUnreadCount('活动通知') > 0 && (
                <Chip
                  label={getUnreadCount('活动通知')}
                  color="error"
                  size="small"
                  sx={{ ml: 1 }}
                />
              )}
            </Typography>
            <List>
              {notifications
                .filter(notification => notification.type === '活动通知')
                .map(notification => (
                  <Box key={notification.id}>
                    <ListItem
                      sx={{
                        bgcolor: notification.isRead ? 'transparent' : 'action.hover',
                        borderRadius: 1,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'action.selected',
                        },
                      }}
                    >
                      <ListItemIcon>
                        <CircleIcon
                          sx={{
                            fontSize: 12,
                            color: notification.isRead ? 'text.disabled' : 'primary.main',
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" sx={{ fontWeight: notification.isRead ? 'normal' : 'bold' }}>
                            {notification.title}
                          </Typography>
                        }
                        secondary={
                          <Box>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                              {notification.content}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {notification.time}
                            </Typography>
                          </Box>
                        }
                      />
                      {!notification.isRead && (
                        <IconButton
                          size="small"
                          onClick={() => handleMarkAsRead(notification.id)}
                          sx={{ ml: 1 }}
                        >
                          <NotificationsActiveIcon />
                        </IconButton>
                      )}
                    </ListItem>
                    <Divider sx={{ my: 2 }} />
                  </Box>
                ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Notification;