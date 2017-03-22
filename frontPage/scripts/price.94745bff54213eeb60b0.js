$(function(){
	$('a[data-toggle="tab"]').click(function(){
		var $this = $(this);
		var tab = $this.data('controls');

		//切换套餐	
		$this.closest('li').siblings().removeClass('active').end().addClass('active');

		var $package = $('.tab-content .tab-pane#'+tab).show().siblings().hide().end().find('.checked');

		var descKey = $package.data('desc-key');
		descKey && switchPackage(descKey);
		return false;
	});
	$('a.wxp-link').click(function(){
		var $this = $(this);
		var descKey = $this.data('desc-key');

		//选择套餐
		$this.siblings().removeClass('checked').end().addClass('checked');

		switchPackage(descKey);
		return false;
	});

	function switchPackage(descKey){
		var $desc = $('.desc-content[data-desc-use="'+descKey+'"]');
		if($desc.length){
			$desc.show().siblings().hide();
		}else{
			$('.desc-content').hide();
		}
	}
});

