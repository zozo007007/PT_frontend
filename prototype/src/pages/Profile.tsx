import { Container, Grid, Card, CardContent, Typography, Box, Avatar, List, ListItem, ListItemText, Divider, LinearProgress } from '@mui/material';
import { CloudUpload as CloudUploadIcon, CloudDownload as CloudDownloadIcon, Star as StarIcon } from '@mui/icons-material';

const mockUserData = {
  username: '资源达人',
  avatar: 'https://via.placeholder.com/100',
  level: 3,
  points: 8750,
  shareRatio: 1.2,
  uploadSize: '1.2TB',
  downloadSize: '980GB',
  registerDate: '2023-01-15',
  lastActive: '2024-01-20',
};

const mockDownloadHistory = [
  {
    id: 1,
    title: '流浪地球2 4K蓝光原盘',
    date: '2024-01-18',
    size: '58.2GB',
  },
  {
    id: 2,
    title: 'Adobe Photoshop 2024',
    date: '2024-01-15',
    size: '3.8GB',
  },
  {
    id: 3,
    title: 'Taylor Swift - 1989 (Taylor\'s Version)',
    date: '2024-01-10',
    size: '1.2GB',
  },
];

const mockFavorites = [
  {
    id: 1,
    title: '赛博朋克2077',
    type: '游戏',
    addDate: '2024-01-19',
  },
  {
    id: 2,
    title: '2024考研数学全程班',
    type: '教育',
    addDate: '2024-01-17',
  },
];

const Profile = () => {
  const getLevelProgress = (level: number) => {
    const progress = (level % 1) * 100;
    return progress || 0;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {/* 用户信息卡片 */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                <Avatar
                  src={mockUserData.avatar}
                  sx={{ width: 100, height: 100, mb: 2 }}
                />
                <Typography variant="h6">{mockUserData.username}</Typography>
                <Typography variant="body2" color="text.secondary">
                  注册时间：{mockUserData.registerDate}
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>用户等级</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography variant="h6" sx={{ mr: 1 }}>Lv.{Math.floor(mockUserData.level)}</Typography>
                  <Box sx={{ flexGrow: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={getLevelProgress(mockUserData.level)}
                      sx={{ height: 8, borderRadius: 1 }}
                    />
                  </Box>
                </Box>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" gutterBottom>积分</Typography>
                  <Typography variant="h6">{mockUserData.points}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" gutterBottom>分享率</Typography>
                  <Typography variant="h6">{mockUserData.shareRatio}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* 数据统计卡片 */}
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>数据统计</Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CloudUploadIcon color="primary" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">总上传量</Typography>
                      <Typography variant="h6">{mockUserData.uploadSize}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CloudDownloadIcon color="secondary" sx={{ mr: 1 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">总下载量</Typography>
                      <Typography variant="h6">{mockUserData.downloadSize}</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* 下载历史 */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>最近下载</Typography>
              <List>
                {mockDownloadHistory.map((item) => (
                  <ListItem key={item.id} sx={{ px: 0 }}>
                    <ListItemText
                      primary={item.title}
                      secondary={`下载时间：${item.date} | 大小：${item.size}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          {/* 收藏夹 */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <StarIcon sx={{ mr: 1 }} color="primary" />
                我的收藏
              </Typography>
              <List>
                {mockFavorites.map((item) => (
                  <ListItem key={item.id} sx={{ px: 0 }}>
                    <ListItemText
                      primary={item.title}
                      secondary={`类型：${item.type} | 收藏时间：${item.addDate}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;