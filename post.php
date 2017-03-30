<?php $this->need('header.php'); ?>
<div id="m-container" class="container">
    <div class="col-md-8">
        <div id="article-list">
            <article class="post-article clearfix">
                <div>
                    <h2 class="title"><a href="<?php $this->permalink() ?>"><?php $this->title() ?></a></h2>
                    <p class="post-big-info">
                        <span class="label label-green"><i class="fa fa-user"></i> <a href="<?php $this->author->permalink(); ?>" rel="author"><?php $this->author(); ?></a></span>
                        <span class="label label-green"><i class="fa fa-tags"></i> <?php $this->category(','); ?></span>
                        <span class="label label-green"><i class="fa fa-calendar"></i> <?php $this->date('Y-m-d'); ?></span>

<span class="label label-green"><i class="fa fa-visit"></i> <?php _e('浏览量: '); ?><?php $this->views(); ?></span>

                    </p>
                </div>
                <div class="article-content clearfix">
                    <?php $this->content(); ?>
                </div>
                <?php if($this->allow('ping')): ?>
                    <div class="article-copyright">
                        <div class="article-license">
                            <img height="24" src="<?php $this->options->themeUrl('img/creativecommons-cc.png'); ?>" class="mb5"><br>
                            <div class="license-item text-muted">
                                本文由 <a href="<?php $this->author->permalink(); ?>"><?php $this->author(); ?></a> 创作，采用 <a class="alert-link" target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC-BY-NC-SA 4.0</a>授权，可自由转载、引用、不可商用，但需署名作者且注明文章出处。
                            </div>

                        </div>
                    </div>
                <?php endif; ?>
                <?php if(class_exists('Reward_Plugin') && isset($this->options->plugins['activated']['Reward'])): ?>
                    <?php Reward_Plugin::show_reward(); ?>
                    <?php Reward_Plugin::show_modal(); ?>
                <?php endif; ?>
            </article>

        </div>

<!--here-->

<!-- Styles just for demo -->
<style>
	body {
	font: 14px/1 "Helvetica Neue",Helvetica,Arial,sans-serif;
	margin:0;
	padding:0;
	background: #DFF4FF;
	}

	.wrapper {
	
	text-align: center;
	}
</style>
<!-- needPopup Javascript file -->
<script src="https://www.mingyueli.com/usr/themes/GreenGrapes/js/needsharebutton.min.js"></script>
<!-- needPopup CSS file -->
<link href="https://www.mingyueli.com/usr/themes/GreenGrapes/css/needsharebutton.min.css" rel="stylesheet" />
<body><div class="wrapper">
<div id="i-share" data-share-position="bottomCenter" class="need-share-button-default" data-share-icon-style="box" data-share-networks="Weibo,Wechat,Twitter,Facebook,GooglePlus,Reddit,Evernote">
	<i class="i-share icon-share" aria-hidden="true"></i>
</div>
<!--like--></div>
<script>
new needShareDropdown(document.getElementById('i-share'));
</script>
</body>
<!--here-->

    <?php if (!empty($this->options->ShowBlock) && in_array('ShowPostBottomBar', $this->options->ShowBlock)): ?>
        <div class="block">
            <ul class="post-near">
                <li>上一篇: <?php $this->thePrev('%s','没有了'); ?></li>
                <li>下一篇: <?php $this->theNext('%s','没有了'); ?></li>
            </ul>
        </div>
    <?php endif; ?>
        <?php $this->need('comments.php'); ?>

    </div>
    <div class="col-md-4">
        <?php $this->need('sidebar.php'); ?>
    </div>

</div>
<?php $this->need('footer.php');

