import { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Rating,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

interface Resource {
  id: number;
  title: string;
  type: string;
  cover: string;
  size: string;
  downloads: number;
  rating: number;
  tags: string[];
}

const mockResources: Resource[] = [
  {
    id: 1,
    title: '流浪地球2 4K蓝光原盘',
    type: '电影',
    cover: 'https://via.placeholder.com/300x400',
    size: '58.2GB',
    downloads: 15420,
    rating: 4.8,
    tags: ['科幻', '动作', '4K', 'HDR'],
  },
  {
    id: 2,
    title: 'Adobe Photoshop 2024',
    type: '软件',
    cover: 'https://via.placeholder.com/300x400',
    size: '3.8GB',
    downloads: 8956,
    rating: 4.5,
    tags: ['设计', '图像处理', 'Windows'],
  },
  {
    id: 3,
    title: 'Taylor Swift - 1989 (Taylor\'s Version)',
    type: '音乐',
    cover: 'https://via.placeholder.com/300x400',
    size: '1.2GB',
    downloads: 12568,
    rating: 4.9,
    tags: ['流行', 'FLAC', '2023'],
  },
  {
    id: 4,
    title: '赛博朋克2077',
    type: '游戏',
    cover: 'https://via.placeholder.com/300x400',
    size: '72.5GB',
    downloads: 25689,
    rating: 4.7,
    tags: ['RPG', '开放世界', 'Steam'],
  },
  {
    id: 5,
    title: '2024考研数学全程班',
    type: '教育',
    cover: 'https://via.placeholder.com/300x400',
    size: '15.8GB',
    downloads: 3567,
    rating: 4.9,
    tags: ['考研', '数学', '视频课程'],
  },
];

const categories = ['全部', '电影', '电视剧', '音乐', '软件', '游戏', '动漫', '学习资料'];
const sortOptions = ['最新发布', '最多下载', '最高评分', '最多收藏'];

const Resources = () => {
  const [category, setCategory] = useState('全部');
  const [sortBy, setSortBy] = useState('最新发布');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const handleResourceClick = (resource: Resource) => {
    setSelectedResource(resource);
  };

  const handleClose = () => {
    setSelectedResource(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* 搜索和筛选区 */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="搜索资源..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>分类</InputLabel>
              <Select
                value={category}
                label="分类"
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>排序</InputLabel>
              <Select
                value={sortBy}
                label="排序"
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      {/* 资源列表 */}
      <Grid container spacing={3}>
        {mockResources.map((resource) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={resource.id}>
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
                height="250"
                image={resource.cover}
                alt={resource.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div" noWrap>
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

export default Resources;