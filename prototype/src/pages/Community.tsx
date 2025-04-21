import { Container, Grid, Card, CardContent, Typography, Box, Avatar, Chip, Divider, List, ListItem, ListItemAvatar, ListItemText, IconButton } from '@mui/material';
import { Favorite as FavoriteIcon, Comment as CommentIcon, Share as ShareIcon } from '@mui/icons-material';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useState } from 'react';

const mockTopics = [
  {
    id: 1,
    title: '求助：4K蓝光原盘下载速度慢怎么办？',
    author: '小白用户',
    avatar: 'https://via.placeholder.com/40',
    content: '最近在下载4K蓝光原盘，速度特别慢，有什么好的解决方案吗？我已经使用了推荐的客户端，但是速度还是不理想...',
    likes: 25,
    comments: 18,
    shares: 5,
    tags: ['技术讨论', '下载问题'],
    time: '2小时前',
  },
  {
    id: 2,
    title: '分享：2024年值得收藏的精品资源推荐',
    author: '资源达人',
    avatar: 'https://via.placeholder.com/40',
    content: '整理了一份2024年目前最受欢迎的资源清单，包括电影、音乐、软件等，都是经过测试的精品资源，供大家参考...',
    likes: 156,
    comments: 45,
    shares: 78,
    tags: ['资源分享', '推荐'],
    time: '5小时前',
  },
];

const mockHotTopics = [
  '新人入站必读指南',
  '如何提高资源分享率',
  '2024年度最受欢迎资源榜单',
  '站内积分获取技巧',
  '资源达人成长经验分享',
];

const Community = () => {
  const [selectedTopic, setSelectedTopic] = useState<typeof mockTopics[0] | null>(null);

  const handleTopicClick = (topic: typeof mockTopics[0]) => {
    setSelectedTopic(topic);
  };

  const handleClose = () => {
    setSelectedTopic(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {/* 左侧主内容区 */}
        <Grid item xs={12} md={8}>
          <Typography variant="h5" sx={{ mb: 3 }}>社区讨论</Typography>
          {mockTopics.map((topic) => (
            <Card 
              key={topic.id} 
              sx={{ 
                mb: 2,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
              onClick={() => handleTopicClick(topic)}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar src={topic.avatar} sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1">{topic.author}</Typography>
                    <Typography variant="caption" color="text.secondary">{topic.time}</Typography>
                  </Box>
                </Box>
                <Typography variant="h6" gutterBottom>{topic.title}</Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {topic.content}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {topic.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{ mr: 1 }}
                    />
                  ))}
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton size="small">
                    <FavoriteIcon fontSize="small" />
                  </IconButton>
                  <Typography variant="body2" sx={{ mr: 3 }}>{topic.likes}</Typography>
                  <IconButton size="small">
                    <CommentIcon fontSize="small" />
                  </IconButton>
                  <Typography variant="body2" sx={{ mr: 3 }}>{topic.comments}</Typography>
                  <IconButton size="small">
                    <ShareIcon fontSize="small" />
                  </IconButton>
                  <Typography variant="body2">{topic.shares}</Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* 右侧边栏 */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>热门话题</Typography>
              <List>
                {mockHotTopics.map((topic, index) => (
                  <ListItem 
                    key={index} 
                    sx={{ 
                      px: 0,
                      '& .MuiListItemText-root': {
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: 'primary.main',
                          textDecoration: 'underline'
                        }
                      }
                    }}
                    // 热门话题点击事件需要创建一个新的话题对象
                    onClick={() => handleTopicClick({
                      id: Math.random(),
                      title: topic,
                      author: '系统',
                      avatar: 'https://via.placeholder.com/40',
                      content: '这是一个热门话题...',
                      likes: 0,
                      comments: 0,
                      shares: 0,
                      tags: ['热门话题'],
                      time: '刚刚'
                    })}
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'primary.main' }}>{index + 1}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={topic} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dialog
        open={Boolean(selectedTopic)}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        {selectedTopic && (
          <>
            <DialogTitle>{selectedTopic.title}</DialogTitle>
            <DialogContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar src={selectedTopic.avatar} sx={{ width: 56, height: 56, mr: 2 }} />
                <Box>
                  <Typography variant="h6">{selectedTopic.author}</Typography>
                  <Typography variant="body2" color="text.secondary">{selectedTopic.time}</Typography>
                </Box>
              </Box>
              <Typography variant="body1" paragraph>
                {selectedTopic.content}
              </Typography>
              <Box sx={{ mb: 2 }}>
                {selectedTopic.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{ mr: 1, mb: 1 }}
                  />
                ))}
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton>
                  <FavoriteIcon />
                </IconButton>
                <Typography variant="body1" sx={{ mr: 3 }}>{selectedTopic.likes}</Typography>
                <IconButton>
                  <CommentIcon />
                </IconButton>
                <Typography variant="body1" sx={{ mr: 3 }}>{selectedTopic.comments}</Typography>
                <IconButton>
                  <ShareIcon />
                </IconButton>
                <Typography variant="body1">{selectedTopic.shares}</Typography>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default Community;