<style>
	<?php
		include(locate_template("Module/Header/header_knrh_1_0_0/sass/header_knrh_1_0_0.min.css"));  
	?>
</style>

<header class="header_knrh_1_0_0">
	<div class="header_knrh_1_0_0__top">
		<div class="container">
			<button class="header_knrh_1_0_0__button">
				<img src="<?php echo $path ?>images/menu-m.svg" alt="">
			</button>
			<div class="header_knrh_1_0_0__brand">
				<a href="/" class="header_knrh_1_0_0__logo logoTop">
					<img width="218" height="75" class="lazy" data-src="<?php echo $path ?>images/logo.png" alt=""></a>
			</div>
		</div>
	</div>
	<div class="header_knrh_1_0_0__bottom">
		<div class="header_knrh_1_0_0__close">&#10005;</div>
		<div class="container">
			<div class="header_knrh_1_0_0__brand">
				<a href="/" class="header_knrh_1_0_0__logo logoBottom">
					<img width="218" height="75" class="lazy" data-src="<?php echo $path ?>images/logo.png" alt=""></a>
			</div>
			<ul class="header_knrh_1_0_0__nav">
				<?php
                    foreach( $field as $key2 => $value): 
                        foreach( $value as $key3 => $list):
                            $main_tt = explode("\n",  $list["title"]);
							$key3 += 1;
                            if( $list['acf_fc_layout'] == 'menu_don' ):
                                echo '
									<li class="header_knrh_1_0_0__navItem">
										<a href="'.$main_tt[1].'" class="header_drg_1_0_0__link header_drg_1_0_0__link--1" data-title="'.$main_tt[0].'">'.$main_tt[0].'</a>
									</li>
                                ';
                            elseif( $list['acf_fc_layout'] == 'menu_sub' ):
                                echo '
									<li class="header_knrh_1_0_0__navItem">
										<a href="#" data-id="header_knrh_1_0_0_dropdown-'.$key3.'" rel="nofollow">'.$main_tt[0].'
											<span>&#10095;</span></a>
										<ul class="header_knrh_1_0_0__dropdown header_knrh_1_0_0__dropdownMain"
											id="header_knrh_1_0_0_dropdown-'.$key3.'"></ul>
									</li>
                                ';
                            elseif ( $list['acf_fc_layout'] == 'menu_sub_multil' ):
                                echo '
									<li class="header_knrh_1_0_0__navItem">
										<a href="'.$main_tt[1].'" data-id="header_knrh_1_0_0_dropdown-'.$key3.'" rel="nofollow">'.$main_tt[0].'
											<span>&#10095;</span></a>
										<ul class="header_knrh_1_0_0__dropdown header_knrh_1_0_0__dropdownMain"
											id="header_knrh_1_0_0_dropdown-'.$key3.'"></ul>
									</li>
                                ';
                            endif;
                        endforeach;
                    endforeach;
                ?>
				<li class="header_knrh_1_0_0__lang">
					<a href="#">
						EN
					</a>
					<span>|</span>
					<a href="#">
						VN
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div id="header_knrh_1_0_0__bg_1" class="header_knrh_1_0_0__bg" style="display: none;"></div>
    <div id="header_knrh_1_0_0__bg_2" class="header_knrh_1_0_0__bg" style="display: none;"></div>
</header>

<script>
	<?php
		include(locate_template("Module/Header/header_knrh_1_0_0/js/header_knrh_1_0_0.min.js"));  
	?>	
</script>