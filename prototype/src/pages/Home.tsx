import { Container, Grid, Typography, Card, CardContent, CardMedia, Box, Chip, Rating, DialogTitle, DialogContent, Dialog } from '@mui/material';
import { Whatshot as WhatshotIcon, LocalOffer as LocalOfferIcon } from '@mui/icons-material';
import { useState } from 'react';

const mockResources = [
  {
    id: 1,
    title: '流浪地球2 4K蓝光原盘',
    type: '电影',
    cover: '/covers/movie_cover_2.jpg',
    size: '58.2GB',
    downloads: 15420,
    rating: 4.8,
    tags: ['科幻', '动作', '4K', 'HDR'],
  },
  {
    id: 2,
    title: 'Adobe Photoshop 2024',
    type: '软件',
    cover: '/covers/photoshop_cover_1.jpg',
    size: '3.8GB',
    downloads: 8956,
    rating: 4.5,
    tags: ['设计', '图像处理', 'Windows'],
  },
  {
    id: 3,
    title: 'Taylor Swift - 1989 (Taylor\'s Version)',
    type: '音乐',
    cover: '/covers/Taylor.png',
    size: '1.2GB',
    downloads: 12568,
    rating: 4.9,
    tags: ['流行', 'FLAC', '2023'],
  },
];

const mockPromotions = [
  {
    id: 1,
    title: '疯狂星期一',
    description: '每周一精选资源免费下载，不限量不限速！',
    image: '/covers/promotion_monday.jpg',
  },
  {
    id: 2,
    title: '新人特惠',
    description: '新注册用户送1000积分，享受7天会员特权',
    image: '/covers/newuser.png',
  },
];

const Home = () => {
  const [selectedResource, setSelectedResource] = useState<typeof mockResources[0] | null>(null);

  const handleResourceClick = (resource: typeof mockResources[0]) => {
    setSelectedResource(resource);
  };

  const handleClose = () => {
    setSelectedResource(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* 活动展示区 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <LocalOfferIcon sx={{ mr: 1 }} color="primary" />
          热门活动
        </Typography>
        <Grid container spacing={3}>
          {mockPromotions.map((promotion) => (
            <Grid item xs={12} md={6} key={promotion.id}>
              <Card sx={{
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={promotion.image}
                  alt={promotion.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {promotion.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {promotion.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 热门资源区 */}
      <Box>
        <Typography variant="h5" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <WhatshotIcon sx={{ mr: 1 }} color="error" />
          热门资源
        </Typography>
        <Grid container spacing={3}>
          {mockResources.map((resource) => (
            <Grid item xs={12} sm={6} md={4} key={resource.id}>
              <Card 
                onClick={() => handleResourceClick(resource)}
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  },
                }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={resource.cover}
                  alt={resource.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {resource.title}
                  </Typography>
                  <Box sx={{ mb: 1 }}>
                    {resource.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{ mr: 0.5, mb: 0.5 }}
                      />
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Rating value={resource.rating} precision={0.1} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      {resource.rating}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    大小：{resource.size} | 下载次数：{resource.downloads}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog
        open={Boolean(selectedResource)}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        {selectedResource && (
          <>
            <DialogTitle>{selectedResource.title}</DialogTitle>
            <DialogContent>
              <Box sx={{ display: 'flex', mb: 3 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 300, height: 400, objectFit: 'cover' }}
                  image={selectedResource.cover}
                  alt={selectedResource.title}
                />
                <Box sx={{ ml: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    {selectedResource.type}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {selectedResource.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{ mr: 0.5, mb: 0.5 }}
                      />
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Rating value={selectedResource.rating} precision={0.1} readOnly />
                    <Typography variant="body1" sx={{ ml: 1 }}>
                      {selectedResource.rating}
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph>
                    文件大小：{selectedResource.size}
                  </Typography>
                  <Typography variant="body1">
                    下载次数：{selectedResource.downloads}
                  </Typography>
                </Box>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default Home;