'id_header_knrh_1_0_0' => array(
    'key' => 'id_header_knrh_1_0_0',
    'name' => 'header_knrh_1_0_0',
    'label' => 'Header [header_knrh_1_0_0]',
    'display' => 'block',
    'sub_fields' => array(
        array(
            'key' => 'id_header_knrh_1_0_0_sub1',
            'label' => 'Menu',
            'name' => 'id_header_knrh_1_0_0_sub1',
            'type' => 'flexible_content',
            'layouts' => array(
                'id_header_knrh_1_0_0_sub1_layout1' => array(
                    'key' => 'id_header_knrh_1_0_0_sub1_layout1',
                    'name' => 'menu_don',
                    'label' => 'Menu Đơn',
                    'display' => 'row',
                    'sub_fields' => array(
                        array(
                            'key' => 'id_header_knrh_1_0_0_sub1_layout1_sub1',
                            'label' => 'Tên Menu',
                            'name' => 'title',
                            'type' => 'textarea',
                            'instructions' => 'Tên Menu | Link ',
                            'required' => 0,
                            'rows' => 3,
                        ),
                    ),
                    'min' => '',
                    'max' => '',
                ),
                'id_header_knrh_1_0_0_sub1_layout2' => array(
                    'key' => 'id_header_knrh_1_0_0_sub1_layout2',
                    'name' => 'menu_sub',
                    'label' => 'Menu Sub',
                    'display' => 'row',
                    'sub_fields' => array(
                        array(
                            'key' => 'id_header_knrh_1_0_0_sub1_layout2_sub1',
                            'label' => 'Menu Cha',
                            'name' => 'title',
                            'type' => 'textarea',
                            'instructions' => 'Tên Menu <br> Link ',
                            'rows' => 3,
                        ),
                        array(
                            'key' => 'id_header_knrh_1_0_0_sub1_layout2_sub2',
                            'label' => 'Menu con',
                            'name' => 'subMenu',
                            'type' => 'flexible_content',
                            'layouts' => array(
                                'layout_content' => array(
                                    'key' => 'id_header_knrh_1_0_0_sub1_layout2_sub2_layout1',
                                    'name' => 'subMenuContent',
                                    'label' => 'Menu con',
                                    'display' => 'block',
                                    'sub_fields' => array(
                                        array(
                                            'key' => 'id_header_knrh_1_0_0_sub1_layout2_sub2_layout1_sub1',
                                            'label' => 'Tiêu đề',
                                            'name' => 'subMenuTitle',
                                            'type' => 'textarea',
                                            'instructions' => 'Dòng 1: Tên Menu, Dòng 2: Link ',
                                            'rows' => 3,
                                        ),
                                        array(
                                            'key' => 'id_header_knrh_1_0_0_sub1_layout2_sub2_layout1_sub2',
                                            'label' => 'Sub Menu',
                                            'name' => 'col1',
                                            'type' => 'wysiwyg',
                                            'instructions' => 'Sử dụng groups UL>LI + Enter để tạo cột',
                                            'tabs' => 'all',
                                            'toolbar' => 'full',
                                            'media_upload' => 1,
                                            'delay' => 0,
                                        ),
                                    ),
                                    'min' => '',
                                    'max' => '',
                                ),
                            ),
                            'button_label' => 'Add Row',
                            'min' => '',
                            'max' => '',
                        ),
                       
                    ),
                    'min' => '',
                    'max' => '',
                ),
                'id_header_knrh_1_0_0_sub1_layout3' => array(
                    'key' => 'id_header_knrh_1_0_0_sub1_layout3',
                    'name' => 'menu_sub_full',
                    'label' => 'Mega Menu',
                    'display' => 'row',
                    'sub_fields' => array(
                        array(
                            'key' => 'id_header_knrh_1_0_0_sub1_layout3_sub1',
                            'label' => 'Menu cha VI',
                            'name' => 'title',
                            'type' => 'textarea',
                            'instructions' => '
                                Dòng 1 : Tên menu <br>
                                Dòng 2 : Link <br>
                                Dòng 3 : Số cột <br>
                            ',
                            'rows' => 4,
                        ),
                        array(
                            'key' => 'id_header_knrh_1_0_0_sub1_layout3_sub2',
                            'label' => 'Sub Menu',
                            'name' => 'col1',
                            'type' => 'wysiwyg',
                            'instructions' => 'Sử dụng groups UL>LI + Enter để tạo cột',
                            'required' => 0,
                            'conditional_logic' => 0,
                            'tabs' => 'all',
                            'toolbar' => 'full',
                            'media_upload' => 1,
                            'delay' => 0,
                        ),
                    ),
                ),
            ),
            'button_label' => 'Thêm Menu',
        ),
    ),
    'min' => '',
    'max' => '',
),