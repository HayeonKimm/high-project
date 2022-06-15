const express = require('express');
const User = require('../schemas/user');
const router = express.Router();
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.SECRET_KEY;
const authMiddleware = require('../middlewares/auth-middleware');

//회원가입 양식
const postUsersSchema = Joi.object({
  userId: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{2,10}$')).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{4,20}$')).required(),
  confirmPassword: Joi.string().required(),
  userImageUrl: Joi.string(),
});

//회원가입
router.post('/signup', async (req, res) => {
  try {
    const { userId, password, confirmPassword, userImageUrl } =
      await postUsersSchema.validateAsync(req.body);
    console.log({ userId, password, confirmPassword, userImageUrl });

    if (password !== confirmPassword) {
      return res.status(400).send({
        errorMessage: '패스워드가 패스워드 확인란과 동일하지 않습니다.',
      });
    }

    const exitstUsers = await User.find({ userId });
    if (exitstUsers.length) {
      return res.status(400).send({
        errorMessage: '중복된 아이디가 존재합니다.',
      });
    }

    const user = new User({ userId, password, userImageUrl });
    await user.save();
    res.status(201).send({ messege: '회원가입 완성' });
  } catch (error) {
    return res.status(400).send({
      errorMessage: '요청한 데이터 형식이 올바르지 않습니다.',
    });
  }
});

//로그인
router.post('/user/login', async (req, res) => {
  User.findOne({ userId: req.body.userId }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '찾고자 하는 아이디가 없습니다.',
      });
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: '비밀번호가 틀렸습니다.',
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        res
          .send(user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

// 정보 조회
router.get('/checkLogin', authMiddleware, async (req, res) => {
  const { user } = res.locals;
  res.send({
    success: '정보 조회가 성공하였습니다.',
    userId: user[0].userId,
    userImageUrl: user[0].userImageUrl,
  });
});

module.exports = router;
