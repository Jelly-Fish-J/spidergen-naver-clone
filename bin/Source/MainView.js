
/**
Constructor
Do not call Function in Constructor.
*/
function MainView()
{
	AView.call(this);
	
	this.interval = null;
}
afc.extendsClass(MainView, AView);


MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here
};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	var thisObj = this;
	
	this.searchbox.setFocus();
	
	this.mainFeedTab.addTab('추천구독', 'Source/feed/feed_sub_view/feed_sub_view_1.lay', 'feed_sub_view1');
	this.mainFeedTab.selectTabById('feed_sub_view1');
	
	// scroll
	window.onscroll = function() {
	
		var scrollPosition = window.scrollY;
		
		var searchArea = thisObj.search_area.element;
		var searchGroup = thisObj.search_group.element;
		
		if (scrollPosition > 300) {
			searchArea.classList.add('fixed');
			searchGroup.classList.add('fixed');
		} else {
			searchArea.classList.remove('fixed');
			searchGroup.classList.remove('fixed');
		}
		
	};
	
	this.time_label.setText(this.nowTime());
	
	
	this.setSlide();
	console.log(this);
};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

MainView.prototype.onSearchboxFocus = function(comp, info, e)
{

	this.searchbox.setPlaceholder('검색어를 입력해 주세요.');

};

MainView.prototype.onSearchboxBlur = function(comp, info, e)
{

	this.searchbox.setPlaceholder('');

};

MainView.prototype.onToggleClick = function(comp, info, e)
{
	// 1단계
	/*if (this.shortcut_group.isShow()) {
		this.shortcut_group.$ele.css('display', 'none');
	} else {
		this.shortcut_group.$ele.css('display', 'block');
	}*/
	
	// 2단계
	/*if (this.shortcut_group.isShow()) {
		this.shortcut_group.removeClass('on');
	} else {
		this.shortcut_group.addClass('on');
	}*/
	
	// 3단계
	this.shortcut_group.element.classList.toggle('on');
	this.more_icon.element.classList.toggle('on');
	this.shortcut_area.element.classList.toggle('on');
};


MainView.prototype.scroll_top_btn_click = function(comp, info, e)
{

	window.scrollTo(0, 0);

};



MainView.prototype.tab_item_click_news = function(comp, info, e)
{

	this.contant_tab.selectTabByIndex(0);

};

MainView.prototype.tab_item_click_media = function(comp, info, e)
{

	this.contant_tab.selectTabByIndex(1);

};

MainView.prototype.tab_item_click_ent = function(comp, info, e)
{

	this.contant_tab.selectTabByIndex(2);

};

MainView.prototype.tab_item_click_sports = function(comp, info, e)
{

	this.contant_tab.selectTabByIndex(3);

};

MainView.prototype.tab_item_click_ico = function(comp, info, e)
{

	this.contant_tab.selectTabByIndex(4);

};

MainView.prototype.nowTime = function() {
	/*var koreanTime = new Date().toLocaleString('ko-KR');

	var formattedTime = koreanTime.replace(",", "");
	var parts = formattedTime.split(" ");
	var dateParts = parts[0].split("/");
	var timeParts = parts[1].split(":");

	var month = +dateParts[0];
	var date = +dateParts[1];
	var hour = +timeParts[0];
	var minite = +timeParts[1];

	if (hour < 13) {
		hour += 12;
	} else if (hour == 12) {
		hour = 0;
	}

	var result = month + "." + date + ". " + hour + ":" +minite;*/
	
	var koreanTime = new Date();
	var koreanMonth = koreanTime.getMonth()+1;
	var koreanDate = koreanTime.getDate();
	var koreanHours = koreanTime.getHours().toString().padStart(2, '0');
	var koreanMinutes = koreanTime.getMinutes();
	
	var result = `${koreanMonth}.${koreanDate}. ${koreanHours}:${koreanMinutes}`;

	return result;
};

MainView.prototype.onBtn_refreshClick = function(comp, info, e)
{

	this.time_label.setText(this.nowTime());

};

MainView.prototype.setSlide = function() {
	// rolling
	
	var thisObj = this;
	
	var timeCount = 0;
	this.interval = setInterval(function() {
		if (timeCount < 2) {
			timeCount++;
		} else {
			timeCount = 0;
			thisObj.banner_rolling.element.classList.toggle('on');
		}
	}, 1000);
};

MainView.prototype.onSlideActionenter = function(comp, info, e)
{
	clearInterval(this.interval);
};

MainView.prototype.onSlideActionleave = function(comp, info, e)
{

	this.setSlide();

};
