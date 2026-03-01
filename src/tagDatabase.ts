// タグデータベース - VSCode拡張 tyranosyntax の tyrano.Tooltip.json から自動生成

/** タグパラメータの定義 */
export interface TagParam {
  name: string;
  required: boolean;
  description: string;
}

/** タグ定義 */
export interface TagDefinition {
  name: string;
  description: string;
  params: TagParam[];
  body: string;
}

/** 全タグ定義のマップ */
export const TAG_DATABASE: Map<string, TagDefinition> = new Map([
  [`3d_add_group`, {
    name: `3d_add_group`,
    description: `3Dオブジェクトをグループに追加します。`,
    params: [
      { name: `name`, required: true, description: `追加する3Dオブジェクトを指定します。` },
      { name: `new_name`, required: false, description: `ここが指定されている場合、nameのオブジェクトをコピーして新しい名前で登録できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_add_group name="" new_name="" cond=""]`
  }],
  [`3d_anim`, {
    name: `3d_anim`,
    description: `シーン上の3Dオブジェクトをアニメーションさせることができます。`,
    params: [
      { name: `name`, required: true, description: `3Dオブジェクトの名前です。この名前の3Dオブジェクトをアニメーションさせます。カメラをアニメーションさせる場合は「camera」という名前を指定します。` },
      { name: `pos`, required: false, description: `アニメーション後、3Dオブジェクトを配置する座標を指定します。半角のカンマで区切ってxyz座標を表します。` },
      { name: `rot`, required: false, description: `アニメーション後、3Dオブジェクトの傾きを指定します。半角カンマで区切ってxyz軸の回転を設定します。` },
      { name: `scale`, required: false, description: `アニメーション後、3Dオブジェクトの拡大率を指定します。半角カンマで区切ってxyz軸の拡大率を指定します。` },
      { name: `time`, required: false, description: `アニメーションにかける時間をミリ秒で指定します。デフォルトは1000です。` },
      { name: `wait`, required: false, description: `アニメーションの完了を待つか否か。true or false デフォルトはtrueです。` },
      { name: `relative`, required: false, description: `true or false を指定します。デフォルトはfalse。trueにすると相対座標指定になります。` },
      { name: `loop`, required: false, description: `アニメーションのループ回数を指定します。trueを指定すると永久にループします。` },
      { name: `direction`, required: false, description: `「alternate」「inifinite」「reverse」 を指定します。デフォルトは「alternate」ループの仕方が指定できます。` },
      { name: `lookat`, required: false, description: `cameraのときだけ有効。オブジェクトのnameかpos座標を指定することでカメラを特定の方向に向けることができます。` },
      { name: `effect`, required: false, description: `変化のエフェクトを指定します。指定できる文字列は以下の種類です swing｜linear｜easeInQuad｜easeOutQuad｜easeInOutQuad｜easeInCubic｜easeOutCubic｜easeInOutCubic｜easeInQuart｜easeOutQuart｜easeInOutQuart｜easeInQuint｜easeOutQuint｜easeInOutQuint｜easeInSine｜easeOutSine｜easeInOutSine｜easeInExpo｜easeOutExpo｜easeInOutExpo｜easeInCirc｜easeOutCirc｜easeInOutCirc｜easeInElastic｜easeOutElastic｜easeInOutElastic｜easeInBack｜easeOutBack｜easeInOutBack｜easeInBounce｜easeOutBounce｜easeInOutBounce` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_anim name="" pos="" rot="" scale="" time="" wait="" relative="" loop="" direction="" lookat="" effect="" cond=""]`
  }],
  [`3d_anim_stop`, {
    name: `3d_anim_stop`,
    description: `アニメーション中の3Dオブジェクトを停止することができます。`,
    params: [
      { name: `name`, required: true, description: `アニメーションを停止する3Dオブジェクトの名前を指定します。` },
      { name: `finish`, required: false, description: `true or false を指定します。falseを指定するとアニメーション停止の位置でオブジェクトが停止します。trueだとアニメーションする予定の位置まで移動します。デフォルトはtrue。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_anim_stop name="" finish="" cond=""]`
  }],
  [`3d_box_new`, {
    name: `3d_box_new`,
    description: `立方体の3Dモデルを定義します。`,
    params: [
      { name: `name`, required: true, description: `3Dオブジェクトの名前です。この名前をつかって表示・非表示などの制御を行います。` },
      { name: `texture`, required: false, description: `表示する画像ファイルを指定します。ファイルは「othres/3d/texture」フォルダ以下に配置してください。１つのテクスチャの場合はすべての面が同じ画像になりますが、半角カンマで区切って６つ指定するとすべての面に異なるテクスチャを適用することもできます` },
      { name: `color`, required: false, description: `色を指定できます。0xRRGGBB 形式で指定します。` },
      { name: `width`, required: false, description: `3Dオブジェクトの横幅を指定します。デフォルトは1です` },
      { name: `height`, required: false, description: `3Dオブジェクトの高さを指定します。デフォルトは1です` },
      { name: `depth`, required: false, description: `3Dオブジェクトの深さを指定します。デフォルトは1です` },
      { name: `pos`, required: false, description: `3Dオブジェクトを配置する座標を指定します。半角のカンマで区切ってxyz座標を表します。` },
      { name: `rot`, required: false, description: `3Dオブジェクトの傾きを指定します。半角カンマで区切ってxyz軸の回転を設定します。` },
      { name: `scale`, required: false, description: `3Dオブジェクトの拡大率を指定します。半角カンマで区切ってxyz軸の拡大率を指定します。` },
      { name: `tonemap`, required: false, description: `トーンマッピングが有効な場合、このオブジェクトが影響を受けるか否かを設定できます。デフォルトはfalse。有効にする場合はtrueを指定してください。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_box_new name="" texture="" color="" width="" height="" depth="" pos="" rot="" scale="" tonemap="" cond=""]`
  }],
  [`3d_camera`, {
    name: `3d_camera`,
    description: `3Dシーンのカメラを設定できます。
カメラの座標を確認したい場合は[camera_debug]をつかって、座標や傾きをテストするのがおすすめです。`,
    params: [
      { name: `pos`, required: false, description: `カメラを配置する座標を指定します。半角のカンマで区切ってxyz座標を表します。` },
      { name: `rot`, required: false, description: `カメラの傾きを指定します。半角カンマで区切ってxyz軸の回転を設定します。` },
      { name: `tonemap`, required: false, description: `トーンマッピングをシーンに設定できます。指定できる種類はNo/Linear/Reinhard/Uncharted2/Cineon/ACESFilmic。デフォルトはNo（トーンマッピングなし）。` },
      { name: `lookat`, required: false, description: `シーン上の3Dオブジェクトのnameを指定して、そのオブジェクトの方にカメラを向けることができます。 もしくはposを直接指定することで、その座標にカメラを向けることもできます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_camera pos="" rot="" tonemap="" lookat="" cond=""]`
  }],
  [`3d_canvas_hide`, {
    name: `3d_canvas_hide`,
    description: `3Dキャンバスを非表示にします。
3Dシーン自体は維持されます。
例えば、3Dシーンからノベルパートへの移動を頻繁にする場合などは便利です。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_canvas_hide cond=""]`
  }],
  [`3d_canvas_show`, {
    name: `3d_canvas_show`,
    description: `3Dキャンバスを表示にします。
例えば、3Dシーンからノベルパートへの移動を頻繁にする場合などは便利です。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_canvas_show cond=""]`
  }],
  [`3d_close`, {
    name: `3d_close`,
    description: `3Dシーンをすべて削除します。
このタグを使用すると3D系の機能は全て使えなくなります。
もう一度使用する場合は[3d_init]タグを通過させてください。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_close cond=""]`
  }],
  [`3d_cylinder_new`, {
    name: `3d_cylinder_new`,
    description: `円柱の3Dモデルを定義します`,
    params: [
      { name: `name`, required: true, description: `3Dオブジェクトの名前です。この名前をつかって表示・非表示などの制御を行います。` },
      { name: `texture`, required: false, description: `球体にテクスチャを貼ることができます。画像は「others/3d/texture」以下に配置してください。サイズは256x256 や 512x512 といったサイズを推奨します。` },
      { name: `color`, required: false, description: `色を指定できます。0xRRGGBB 形式で指定します。` },
      { name: `pos`, required: false, description: `3Dオブジェクトを配置する座標を指定します。半角のカンマで区切ってxyz座標を表します。` },
      { name: `rot`, required: false, description: `3Dオブジェクトの傾きを指定します。半角カンマで区切ってxyz軸の回転を設定します。` },
      { name: `scale`, required: false, description: `3Dオブジェクトの拡大率を指定します。半角カンマで区切ってxyz軸の拡大率を指定します。` },
      { name: `segment`, required: false, description: `円の細かさを指定します。数値が増えるほど円に近くなります。デフォルトは10` },
      { name: `width`, required: false, description: `円柱の横幅を指定します。デフォルトは10` },
      { name: `height`, required: false, description: `円柱の高さを指定します。デフォルトは20` },
      { name: `side`, required: false, description: `テクスチャをどの面に適用するかを指定できます。front(前面) back（背面）double（両面）。デフォルトはfront` },
      { name: `tonemap`, required: false, description: `トーンマッピングが有効な場合、このオブジェクトが影響を受けるか否かを設定できます。デフォルトはtrue。無効にする場合はfalseを指定してください。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_cylinder_new name="" texture="" color="" pos="" rot="" scale="" segment="" width="" height="" side="" tonemap="" cond=""]`
  }],
  [`3d_debug`, {
    name: `3d_debug`,
    description: `3Dシーンのオブジェクトをマウスでドラッグアンドドロップしながら、調整することができます。
デバッグを終了する場合は画面左上のボタンを押します。
マウス操作
左クリック：カメラの向き(rot)
右クリック：カメラの位置(pos)
中央クリック：ポジションのz軸
スクロール：拡大縮小（scale）`,
    params: [
      { name: `name`, required: true, description: `デバッグする3Dオブジェクトのnameを指定してください。` },
      { name: `button_text`, required: false, description: `デバッグを終了するボタンのテキストを自由に設定できます。デフォルトは「3Dインスペクタを閉じる」` },
      { name: `menu`, required: false, description: `デバッグのメニューを表示するか否か。falseを指定すると終了させるボタンのみになります。デフォルトはtrue(表示)` },
      { name: `overlap`, required: false, description: `true or false。trueを指定すると最前面にモデルが表示されます。メニューに隠れたくない場合はここをtrueにしてください。デフォルトはflase` },
      { name: `reset`, required: false, description: `true or false。trueを指定するとデバッグが終わった後、モデルがデバッグ前の位置に戻ります。デフォルトはfalse。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_debug name="" button_text="" menu="" overlap="" reset="" cond=""]`
  }],
  [`3d_debug_bk`, {
    name: `3d_debug_bk`,
    description: `3Dシーンのオブジェクトをマウスでドラッグアンドドロップしながら、調整することができます。
デバッグを終了する場合は画面左上のボタンを押します。
マウス操作
左クリック：カメラの向き(rot)
右クリック：カメラの位置(pos)
中央クリック：ポジションのz軸
スクロール：拡大縮小（scale）`,
    params: [
      { name: `name`, required: true, description: `デバッグする3Dオブジェクトのnameを指定してください。` },
      { name: `button_text`, required: false, description: `デバッグを終了するボタンのテキストを自由に設定できます。デフォルトは「3Dインスペクタを閉じる」` },
      { name: `menu`, required: false, description: `デバッグのメニューを表示するか否か。falseを指定すると終了させるボタンのみになります。デフォルトはtrue(表示)` },
      { name: `overlap`, required: false, description: `true or false。trueを指定すると最前面にモデルが表示されます。メニューに隠れたくない場合はここをtrueにしてください。デフォルトはflase` },
      { name: `reset`, required: false, description: `true or false。trueを指定するとデバッグが終わった後、モデルがデバッグ前の位置に戻ります。デフォルトはfalse。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_debug_bk name="" button_text="" menu="" overlap="" reset="" cond=""]`
  }],
  [`3d_debug_camera`, {
    name: `3d_debug_camera`,
    description: `3Dシーンのカメラ座標をマウスでドラッグアンドドロップしながら、調整することができます。
デバッグを終了する場合は画面左上のボタンを押します。
マウス操作
左クリック：カメラの向き(rot)
右クリック：カメラの位置(pos)
中央クリック：ポジションのz軸`,
    params: [
      { name: `button_text`, required: false, description: `デバッグを終了するボタンのテキストを自由に設定できます。デフォルトは「カメラインスペクタを閉じる」` },
      { name: `menu`, required: false, description: `デバッグのメニューを表示するか否か。falseを指定すると終了させるボタンのみになります。デフォルトはtrue(表示)` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_debug_camera button_text="" menu="" cond=""]`
  }],
  [`3d_delete`, {
    name: `3d_delete`,
    description: `3Dオブジェクトを削除します。
このタグは定義からも削除されるので、再度使用する場合は
もう一度 new タグで定義する必要があります。
使用しなくなった3Dオブジェクトはこまめに削除することで軽量な動作が期待できます。`,
    params: [
      { name: `name`, required: true, description: `3Dオブジェクトの名前です。削除していオブジェクトのnameを指定してください` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_delete name="" cond=""]`
  }],
  [`3d_delete_all`, {
    name: `3d_delete_all`,
    description: `3Dオブジェクトをすべて削除します。
3Dシーンをリセットするときに利用します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_delete_all cond=""]`
  }],
  [`3d_event`, {
    name: `3d_event`,
    description: `3Dシーン上のオブジェクトがクリックされたときに、イベントを発火させることができます。
イベントは[s]タグに到達していないと発火しません。
また、一度イベントが発火すると自動的に全イベントが無効化されます（イベント定義自体は残っている）
再度イベントを発生させたい場合は[3d_event_start]を通過する必要があります。`,
    params: [
      { name: `name`, required: true, description: `3Dオブジェクトの名前です。イベントを発生させる3Dオブジェクトのnameを指定してください。` },
      { name: `storage`, required: false, description: `移動するシナリオファイル名を指定します。省略された場合は現在のシナリオファイルと見なされます` },
      { name: `target`, required: false, description: `ジャンプ先のラベル名を指定します。省略すると先頭から実行されます` },
      { name: `type`, required: false, description: `jump or eval を指定する。デフォルトはjump。evalを指定した場合はexpパラメーターに指定したjsが実行される。` },
      { name: `exp`, required: false, description: `typeにevalを指定した場合に実行されるjsを記述します。` },
      { name: `distance`, required: false, description: `クリック時にイベントが発生する距離を指定できます。この指定より遠くにあるオブジェクトは反応しません` },
      { name: `ground`, required: false, description: `FPSモードの際に自分が特定のオブジェクトの上にいるときだけ発火させることができます。ここで指定したnameのオブジェクト上にいるときだけイベントが発火。` },
      { name: `mode`, required: false, description: `click or collision を指定します。fpsの場合にクリックで発火するか、collisionで発火するかを選択できます。デフォルトはclick。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_event name="" storage="" target="" type="" exp="" distance="" ground="" mode="" cond=""]`
  }],
  [`3d_event_delete`, {
    name: `3d_event_delete`,
    description: `登録した3Dイベントを無効化します。`,
    params: [
      { name: `name`, required: true, description: `3Dオブジェクトの名前です。イベントを削除する3Dオブジェクトのnameを指定してください。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_event_delete name="" cond=""]`
  }],
  [`3d_event_start`, {
    name: `3d_event_start`,
    description: `登録した3Dイベントを開始します。
イベントが実行された後は必ず全イベントが無効化されるため、このタグで再度受付を開始する必要があります。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_event_start cond=""]`
  }],
  [`3d_event_stop`, {
    name: `3d_event_stop`,
    description: `登録した3Dイベントを停止します。
[3d_event_start]で再開できます。
登録したイベント自体は消えません。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_event_stop cond=""]`
  }],
  [`3d_fps_control`, {
    name: `3d_fps_control`,
    description: `FPSコントロールが可能になる。
[s]に到達していないと実行されません。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_fps_control cond=""]`
  }],
  [`3d_gyro`, {
    name: `3d_gyro`,
    description: `スマホの傾きでカメラを制御することができます。
PCゲームの場合はマウスの位置でジャイロを再現することができます。`,
    params: [
      { name: `max_x`, required: false, description: `X軸方向の傾き上限を角度で指定します。デフォルトは30` },
      { name: `max_y`, required: false, description: `Y軸方向の傾き上限を角度で指定します。デフォルトは30` },
      { name: `mode`, required: false, description: `position か rotation を指定します。傾きに対してカメラに回転の影響を与えるのか、座標移動を与えるのかの違いがあります。デフォルトはrotation（回転）です。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_gyro max_x="" max_y="" mode="" cond=""]`
  }],
  [`3d_gyro_stop`, {
    name: `3d_gyro_stop`,
    description: `スマホ限定
ジャイロの動きを停止します。
カメラの位置も戻したい場合はこのタグの直後に3d_cameraで指定してください。
再度ジャイロを有効にしたい場合は [3d_gyro] タグです。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_gyro_stop cond=""]`
  }],
  [`3d_helper`, {
    name: `3d_helper`,
    description: `3D空間に操作補助用のラインを描画させることができる`,
    params: [
      { name: `name`, required: false, description: `3Dオブジェクトの名前です。この名前をつかって表示・非表示などの制御を行います。` },
      { name: `text`, required: false, description: `表示するテキスト文字列を指定します` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_helper name="" text="" cond=""]`
  }],
  [`3d_hide`, {
    name: `3d_hide`,
    description: `3Dオブジェクトをゲーム画面から退場させます。
このタグを実行しても定義自体は削除されません。
もう一度表示する場合は[3d_show]タグを使ってください。`,
    params: [
      { name: `name`, required: true, description: `3Dオブジェクトの名前です。退場させたいオブジェクトのnameを指定してください` },
      { name: `time`, required: false, description: `退場させるまでの時間をミリ秒で指定します。デフォルトは500` },
      { name: `wait`, required: false, description: `退場の完了を待つか否か。デフォルトはtrue。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_hide name="" time="" wait="" cond=""]`
  }],
  [`3d_hide_all`, {
    name: `3d_hide_all`,
    description: `すべての3Dオブジェクトをゲーム画面から退場させます。
このタグを実行しても定義自体は削除されません。
もう一度表示する場合は[3d_show]タグを使ってください。`,
    params: [
      { name: `time`, required: false, description: `退場させるまでの時間をミリ秒で指定します。デフォルトは500` },
      { name: `wait`, required: false, description: `退場の完了を待つか否か。デフォルトはtrue。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_hide_all time="" wait="" cond=""]`
  }],
  [`3d_image_new`, {
    name: `3d_image_new`,
    description: `イメージの3Dモデルを定義します。
平面の板が3Dシーンに追加されるイメージです。`,
    params: [
      { name: `name`, required: true, description: `3Dオブジェクトの名前です。この名前をつかって表示・非表示などの制御を行います。` },
      { name: `texture`, required: false, description: `表示する画像ファイルを指定します。ファイルは「othres/3d/texture」フォルダ以下に配置してください。` },
      { name: `width`, required: true, description: `3Dオブジェクトの横幅を指定します。デフォルトは1です` },
      { name: `height`, required: false, description: `3Dオブジェクトの高さを指定します。省略した場合は画像サイズの比率を保った形で表示できます。` },
      { name: `pos`, required: false, description: `3Dオブジェクトを配置する座標を指定します。半角のカンマで区切ってxyz座標を表します。` },
      { name: `rot`, required: false, description: `3Dオブジェクトの傾きを指定します。半角カンマで区切ってxyz軸の回転を設定します。` },
      { name: `scale`, required: false, description: `3Dオブジェクトの拡大率を指定します。半角カンマで区切ってxyz軸の拡大率を指定します。` },
      { name: `doubleside`, required: false, description: `テクスチャを両面に表示させるかを指定します。デフォルトはfalse。trueを指定すると裏面にもテクスチャが表示されます。` },
      { name: `tonemap`, required: false, description: `トーンマッピングが有効な場合、このオブジェクトが影響を受けるか否かを設定できます。デフォルトはfalse。有効にする場合はtrueを指定してください。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_image_new name="" texture="" width="" height="" pos="" rot="" scale="" doubleside="" tonemap="" cond=""]`
  }],
  [`3d_init`, {
    name: `3d_init`,
    description: `3D関連の機能を使用するために必要な宣言です。
このタグを通過時、ゲーム内に3Dを表示するためのシーンが追加されます。
また、タグを配置していないと3d_xxx で始まるタグを使用できません。`,
    params: [
      { name: `layer`, required: false, description: `3Dモデルを配置するレイヤを指定できます。` },
      { name: `camera`, required: false, description: `カメラのモードを指定できます。「Perspective」（遠近感あり）「Orthographic」（遠近感なしの平行投影）デフォルトはPerspective` },
      { name: `near`, required: false, description: `カメラに近いオブジェクトをどの距離まで描画するかを設定できます。デフォルトは１` },
      { name: `far`, required: false, description: `カメラから遠いオブジェクトを表示する距離を設定できます。大きすぎると不必要に遠くまで描画するため処理が重くなります。可能な限り小さい値に調整しましょう。デフォルトは5000` },
      { name: `material_type`, required: false, description: `シーンで利用するマテリアルの性質を指定します。デフォルトはbasic。basic（軽量だが光の表現無効）lambert（光の表現可能）standard（光の表現に加えて反射やメタリックにも対応）` },
      { name: `ambient_light`, required: false, description: `環境光の強さを数字で指定します。すべての面に均等に当たる光です。デフォルトは1` },
      { name: `directional_light`, required: false, description: `特定の方向から放射される光の強さ。太陽の光をイメージするとわかりやすい。デフォルトは0` },
      { name: `antialias`, required: false, description: `アンチエイリアスの設定。true or false を指定します。デフォルトはtrue` },
      { name: `debug_option`, required: false, description: `自分のいるポジション座標を画面に表示するか否か` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_init layer="" camera="" near="" far="" material_type="" ambient_light="" directional_light="" antialias="" debug_option="" cond=""]`
  }],
  [`3d_model_new`, {
    name: `3d_model_new`,
    description: `外部ファイル形式の3Dモデルを読み込んで定義します。
実行時はゲーム画面には表示されません。表示するには[3d_show ]が必要です。
3Dモデルファイルは data/others/3d/modelフォルダに配置します。`,
    params: [
      { name: `name`, required: true, description: `3Dオブジェクトの名前です。この名前をつかって表示・非表示などの制御を行います。` },
      { name: `storage`, required: true, description: `3Dファイルを指定します。gltf obj json 形式に対応します。ファイルはothers/3d/modelフォルダに配置してください。` },
      { name: `pos`, required: false, description: `3Dオブジェクトを配置する座標を指定します。半角のカンマで区切ってxyz座標を表します。` },
      { name: `rot`, required: false, description: `3Dオブジェクトの傾きを指定します。半角カンマで区切ってxyz軸の回転を設定します。` },
      { name: `scale`, required: false, description: `3Dオブジェクトの拡大率を指定します。半角カンマで区切ってxyz軸の拡大率を指定します。` },
      { name: `tonemap`, required: false, description: `トーンマッピングが有効な場合、このオブジェクトが影響を受けるか否かを設定できます。デフォルトはtrue。無効にする場合はfalseを指定してください。` },
      { name: `motion`, required: false, description: `ファイルにモーションが存在する場合、モーション名を指定することができます。指定がない場合は１つめのモーションファイルが自動的に適用されます。noneを指定するとアニメーションは適用されません` },
      { name: `folder`, required: false, description: `ファイルの配置フォルダを変更できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_model_new name="" storage="" pos="" rot="" scale="" tonemap="" motion="" folder="" cond=""]`
  }],
  [`3d_motion`, {
    name: `3d_motion`,
    description: `3Dモデルのモーションを変更することができます。`,
    params: [
      { name: `name`, required: true, description: `3Dオブジェクトの名前を指定します。` },
      { name: `motion`, required: true, description: `モーション名を指定してください。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_motion name="" motion="" cond=""]`
  }],
  [`3d_new_group`, {
    name: `3d_new_group`,
    description: `3Dオブジェクトをグループで管理することができるようにする。`,
    params: [
      { name: `name`, required: true, description: `新規作成するグループ名を設定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_new_group name="" cond=""]`
  }],
  [`3d_scene`, {
    name: `3d_scene`,
    description: `3Dのシーン全体に影響する設定を行うことができます。`,
    params: [
      { name: `tonemap`, required: false, description: `トーンマッピングをシーンに設定できます。指定できる種類はNo/Linear/Reinhard/Uncharted2/Cineon/ACESFilmic。デフォルトはNo（トーンマッピングなし）。` },
      { name: `tonemap_value`, required: false, description: `トーンマッピングの強さを設定します。デフォルトは0.8です。` },
      { name: `light_amb`, required: false, description: `環境光の強さを指定します。デフォルトは1。例えば 0.5 だと暗め。2だとかなり明るくなります。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_scene tonemap="" tonemap_value="" light_amb="" cond=""]`
  }],
  [`3d_show`, {
    name: `3d_show`,
    description: `定義した3Dオブジェクトを実際にゲーム画面に登場させます。`,
    params: [
      { name: `name`, required: true, description: `3Dオブジェクトの名前です。表示させたいオブジェクトのnameを指定してください` },
      { name: `time`, required: false, description: `表示させるまでの時間をミリ秒で指定します。デフォルトは500` },
      { name: `wait`, required: false, description: `表示の完了を待つか否か。デフォルトはtrue。` },
      { name: `pos`, required: false, description: `3Dオブジェクトを配置する座標を指定します。半角のカンマで区切ってxyz座標を表します。` },
      { name: `rot`, required: false, description: `3Dオブジェクトの傾きを指定します。半角カンマで区切ってxyz軸の回転を設定します。` },
      { name: `scale`, required: false, description: `3Dオブジェクトの拡大率を指定します。半角カンマで区切ってxyz軸の拡大率を指定します。` },
      { name: `group`, required: false, description: `グループに所属させることができます。グループ名を指定してください` },
      { name: `group_uuid`, required: false, description: `シーン中でuuidを指定してグループの直下に追加することが可能です` },
      { name: `force_sprite`, required: false, description: `該当オブジェクトは強制的にスプライトグループに格納されます。` },
      { name: `scene_add`, required: false, description: `デフォルトfalse ここがtrueの場合はsceneに直接追加される` },
      { name: `visible`, required: false, description: `true or false を指定。初期状態で非表示状態でシーンに追加したい場合はfalseを指定。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_show name="" time="" wait="" pos="" rot="" scale="" group="" group_uuid="" force_sprite="" scene_add="" visible="" cond=""]`
  }],
  [`3d_sound`, {
    name: `3d_sound`,
    description: `3D空間に音を配置することができます。`,
    params: [
      { name: `name`, required: false, description: `オブジェクト名。この名前をつかって表示・非表示などの制御を行います。` },
      { name: `target_name`, required: false, description: `このオブジェクトがある場所で鳴らします。` },
      { name: `pos`, required: false, description: `3Dオブジェクトを配置する座標を指定します。半角のカンマで区切ってxyz座標を表します。` },
      { name: `loop`, required: false, description: `trueを指定すると繰り返し鳴らします。デフォルトはtrue` },
      { name: `volume`, required: false, description: `音量を指定できます。0〜1` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_sound name="" target_name="" pos="" loop="" volume="" cond=""]`
  }],
  [`3d_sphere_new`, {
    name: `3d_sphere_new`,
    description: `球体の3Dモデルを定義します`,
    params: [
      { name: `name`, required: true, description: `3Dオブジェクトの名前です。この名前をつかって表示・非表示などの制御を行います。` },
      { name: `texture`, required: false, description: `球体にテクスチャを貼ることができます。画像は「others/3d/texture」以下に配置してください。サイズは256x256 や 512x512 といったサイズを推奨します。` },
      { name: `color`, required: false, description: `色を指定できます。0xRRGGBB 形式で指定します。` },
      { name: `pos`, required: false, description: `3Dオブジェクトを配置する座標を指定します。半角のカンマで区切ってxyz座標を表します。` },
      { name: `rot`, required: false, description: `3Dオブジェクトの傾きを指定します。半角カンマで区切ってxyz軸の回転を設定します。` },
      { name: `scale`, required: false, description: `3Dオブジェクトの拡大率を指定します。半角カンマで区切ってxyz軸の拡大率を指定します。` },
      { name: `radius`, required: false, description: `球体の半径を指定します。デフォルトは300` },
      { name: `width`, required: false, description: `球体の横幅を指定します。デフォルトは30` },
      { name: `height`, required: false, description: `球体の高さを指定します。デフォルトは30` },
      { name: `side`, required: false, description: `テクスチャをどの面に適用するかを指定できます。front(前面) back（背面）double（両面）。デフォルトはfront` },
      { name: `tonemap`, required: false, description: `トーンマッピングが有効な場合、このオブジェクトが影響を受けるか否かを設定できます。デフォルトはtrue。無効にする場合はfalseを指定してください。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_sphere_new name="" texture="" color="" pos="" rot="" scale="" radius="" width="" height="" side="" tonemap="" cond=""]`
  }],
  [`3d_sprite_new`, {
    name: `3d_sprite_new`,
    description: `スプライトの3Dモデルを定義します。
イメージとの違いはスプライトの場合、オブジェクトが常にカメラの方を向きます。`,
    params: [
      { name: `name`, required: true, description: `3Dオブジェクトの名前です。この名前をつかって表示・非表示などの制御を行います。` },
      { name: `storage`, required: true, description: `表示する画像ファイルを指定します。ファイルは「othres/3d/sprite」フォルダ以下に配置してください。` },
      { name: `pos`, required: false, description: `3Dオブジェクトを配置する座標を指定します。半角のカンマで区切ってxyz座標を表します。` },
      { name: `rot`, required: false, description: `3Dオブジェクトの傾きを指定します。半角カンマで区切ってxyz軸の回転を設定します。` },
      { name: `scale`, required: false, description: `3Dオブジェクトの拡大率を指定します。半角カンマで区切ってxyz軸の拡大率を指定します。` },
      { name: `tonemap`, required: false, description: `トーンマッピングが有効な場合、このオブジェクトが影響を受けるか否かを設定できます。デフォルトはfalse。有効にする場合はtrueを指定してください。` },
      { name: `folder`, required: false, description: `ファイルの配置フォルダを変更できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_sprite_new name="" storage="" pos="" rot="" scale="" tonemap="" folder="" cond=""]`
  }],
  [`3d_text_new`, {
    name: `3d_text_new`,
    description: `3D空間にテキストを表示できます。`,
    params: [
      { name: `name`, required: true, description: `3Dオブジェクトの名前です。この名前をつかって表示・非表示などの制御を行います。` },
      { name: `text`, required: true, description: `表示するテキスト文字列を指定します` },
      { name: `pos`, required: false, description: `3Dオブジェクトを配置する座標を指定します。半角のカンマで区切ってxyz座標を表します。` },
      { name: `rot`, required: false, description: `3Dオブジェクトの傾きを指定します。半角カンマで区切ってxyz軸の回転を設定します。` },
      { name: `scale`, required: false, description: `3Dオブジェクトの拡大率を指定します。半角カンマで区切ってxyz軸の拡大率を指定します。` },
      { name: `size`, required: false, description: `フォントサイズ。デフォルトは42` },
      { name: `color`, required: false, description: `色を指定できます。0xRRGGBB 形式で指定します。` },
      { name: `face`, required: false, description: `フォントの種類を指定できます` },
      { name: `sprite`, required: false, description: `true or falseを指定。trueを指定すると常に正面をむくテキストを作成します。デフォルトはfalse` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[3d_text_new name="" text="" pos="" rot="" scale="" size="" color="" face="" sprite="" cond=""]`
  }],
  [`anim`, {
    name: `anim`,
    description: `画像やボタン、レイヤなどの中身をアニメーションさせることができます。`,
    params: [
      { name: `name`, required: false, description: `ここで指定した値が設定されている要素に対してアニメーションを開始します。name属性で指定した値です。` },
      { name: `layer`, required: false, description: `name属性が指定されている場合は無視されます。前景レイヤを指定します。必ずforeページに対して実施されます。` },
      { name: `left`, required: false, description: `指定した横位置にアニメーションで移動します。` },
      { name: `top`, required: false, description: `指定した縦位置にアニメーションで移動します。` },
      { name: `width`, required: false, description: `幅を指定します` },
      { name: `height`, required: false, description: `高さを指定します` },
      { name: `opacity`, required: false, description: `0～255の値を指定します。指定した透明度へアニメーションします` },
      { name: `color`, required: false, description: `色指定` },
      { name: `time`, required: false, description: `アニメーションにかける時間をミリ秒で指定してください。デフォルトは2000ミリ秒です` },
      { name: `effect`, required: false, description: `変化のエフェクトを指定します。以下のキーワードが指定できます。jswingdefeaseInQuadeaseOutQuadeaseInOutQuadeaseInCubiceaseOutCubiceaseInOutCubiceaseInQuarteaseOutQuarteaseInOutQuarteaseInQuinteaseOutQuinteaseInOutQuinteaseInSineeaseOutSineeaseInOutSineeaseInExpoeaseOutExpoeaseInOutExpoeaseInCirceaseOutCirceaseInOutCirceaseInElasticeaseOutElasticeaseInOutElasticeaseInBackeaseOutBackeaseInOutBackeaseInBounceeaseOutBounceeaseInOutBounce` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[anim name="" layer="" left="" top="" width="" height="" opacity="" color="" time="" effect="" cond=""]`
  }],
  [`apply_local_patch`, {
    name: `apply_local_patch`,
    description: `V470以降で使用可。PCアプリとして配布している場合のみ有効です。`,
    params: [
      { name: `file`, required: true, description: `パッチファイルのパスを指定します。exeファイルの階層を起点として指定します` },
      { name: `reload`, required: false, description: `trueまたはfalseを指定します。trueを指定すると、パッチ反映後にゲームが自動的に再起動されます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[apply_local_patch file="" reload="" cond=""]`
  }],
  [`autoconfig`, {
    name: `autoconfig`,
    description: `オートモードに関する設定を行います。`,
    params: [
      { name: `speed`, required: false, description: `オートモード時のスピードをミリ秒で指定してください` },
      { name: `clickstop`, required: false, description: `画面クリック時にオートモードを停止するかどうか。trueまたはfalseで指定します。falseを指定すると、画面をクリックしてもオートモードが止まらないようになります。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[autoconfig speed="" clickstop="" cond=""]`
  }],
  [`autoload`, {
    name: `autoload`,
    description: `[autosave]タグで保存されたデータを読み込みます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[autoload cond=""]`
  }],
  [`autosave`, {
    name: `autosave`,
    description: `このタグに到達した際、自動的にプレイ状況を保存します。`,
    params: [
      { name: `title`, required: false, description: `セーブデータのタイトルを指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[autosave title="" cond=""]`
  }],
  [`autostart`, {
    name: `autostart`,
    description: `オートモードを開始します。テキストの文字数に応じた時間経過によってクリック待ちを自動的で通過するようになります。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[autostart cond=""]`
  }],
  [`autostop`, {
    name: `autostop`,
    description: `オートモードを停止します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[autostop cond=""]`
  }],
  [`awakegame`, {
    name: `awakegame`,
    description: `[sleepgame]タグで保存されたゲームの状態に復帰します。`,
    params: [
      { name: `variable_over`, required: false, description: `trueまたはfalseを指定します。trueを指定すると、[sleepgame]中のゲーム変数の変更を復帰後に引き継ぎます。` },
      { name: `bgm_over`, required: false, description: `trueまたはfalseを指定します。trueを指定すると、[sleepgame]中のBGMを復帰後に引き継ぎます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[awakegame variable_over="" bgm_over="" cond=""]`
  }],
  [`backlay`, {
    name: `backlay`,
    description: `指定したレイヤ（あるいはすべてのレイヤ）の情報を、表ページから裏ページにコピーします。`,
    params: [
      { name: `layer`, required: false, description: `対象となるレイヤを指定します。baseを指定すると背景レイヤに、0以上の整数を指定すると前景レイヤに、message0やmessage1のように指定するとメッセージレイヤになります。messageとのみ指定した場合は[current]タグで指定してある現在の操作対象のメッセージレイヤが対象になります。省略すると、すべてのレイヤの情報が裏ページにコピーされます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[backlay layer="" cond=""]`
  }],
  [`bg`, {
    name: `bg`,
    description: `背景の切り替えを簡易的に実行できます。
常にforeのレイヤに対して切り替えが実行されます。`,
    params: [
      { name: `storage`, required: true, description: `画像ファイル名を指定します。ファイルはdata/bgimageに配置してください` },
      { name: `time`, required: false, description: `背景の切り替えにかける時間をミリ秒で指定します。` },
      { name: `wait`, required: false, description: `背景の切り替えを待つかどうか。trueまたはfalseで指定します。falseを指定すると、切り替えの完了を待たずに次のタグに進みます。` },
      { name: `cross`, required: false, description: `trueまたはfalseを指定します。デフォルトはfalse。trueを指定すると、2つの画像が同じタイミングで透明になりながら入れ替わります。falseを指定すると、古い背景を残しながら上に重ねる形で新しい背景を表示します。CG差分などで使用する場合はfalseが良いでしょう。` },
      { name: `position`, required: false, description: `省略すると、画像がゲーム画面いっぱいに引き伸ばされます（比率は崩れる）。この値を指定すると、背景画像と画面サイズの比率が異なる場合に、比率を崩さずに背景を配置できます。配置位置を次のキーワードから選択してください。left(左寄せ)、center(中央寄せ)、right(右寄せ)、top(上寄せ)、bottom(下寄せ)` },
      { name: `method`, required: false, description: `切り替えのタイプを指定します。デフォルトはfadeInです。指定できる演出は次の通りです。 【V450以降】fadeInfadeInDownfadeInLeftfadeInRightfadeInUplightSpeedInrotateInrotateInDownLeftrotateInDownRightrotateInUpLeftrotateInUpRightzoomInzoomInDownzoomInLeftzoomInRightzoomInUpslideInDownslideInLeftslideInRightslideInUpbounceIn bounceInDownbounceInLeftbounceInRightbounceInUprollInvanishInpuffIn 【V450以前】crossfadeexplodeslideblindbounceclipdropfoldpuffscaleshakesize` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[bg storage="" time="" wait="" cross="" position="" method="" cond=""]`
  }],
  [`bg2`, {
    name: `bg2`,
    description: `背景の切り替えを簡易的に実行できます。
常にforeのレイヤに対して切り替えが実行されます。`,
    params: [
      { name: `name`, required: false, description: `[anim]タグなどからこの名前でアニメーションさせられます。カンマで区切ることで複数指定できます。（高度な知識：name属性で指定した値はHTMLのクラス属性になります）` },
      { name: `storage`, required: true, description: `画像ファイルの名前を指定します。ファイルはdata/bgimage以下に配置します。` },
      { name: `left`, required: false, description: `画像左端の位置をピクセル単位で指定します。0でゲーム画面の上端に表示されます。` },
      { name: `top`, required: false, description: `画像上端の位置をピクセル単位で指定します。0でゲーム画面の上端に表示されます。` },
      { name: `width`, required: false, description: `画像の横幅をピクセル単位で指定します。省略すると、ゲーム画面いっぱいに引き伸ばされます。` },
      { name: `height`, required: false, description: `画像の高さ位置をピクセル単位で指定します。省略すると、ゲーム画面いっぱいに引き伸ばされます。` },
      { name: `time`, required: false, description: `背景の切り替えにかける時間をミリ秒で指定します。` },
      { name: `wait`, required: false, description: `背景の切り替えを待つかどうか。trueまたはfalseで指定します。falseを指定すると、切り替えの完了を待たずに次のタグに進みます。` },
      { name: `cross`, required: false, description: `trueまたはfalseを指定します。デフォルトはfalse。trueを指定すると、2つの画像が同じタイミングで透明になりながら入れ替わります。falseを指定すると、古い背景を残しながら上に重ねる形で新しい背景を表示します。CG差分などで使用する場合はfalseが良いでしょう。` },
      { name: `method`, required: false, description: `切り替えのタイプを指定します。デフォルトはfadeInです。指定できる演出は次の通りです。 【V450以降】fadeInfadeInDownfadeInLeftfadeInRightfadeInUplightSpeedInrotateInrotateInDownLeftrotateInDownRightrotateInUpLeftrotateInUpRightzoomInzoomInDownzoomInLeftzoomInRightzoomInUpslideInDownslideInLeftslideInRightslideInUpbounceIn bounceInDownbounceInLeftbounceInRightbounceInUprollInvanishInpuffIn 【V450以前】crossfadeexplodeslideblindbounceclipdropfoldpuffscaleshakesize` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[bg2 name="" storage="" left="" top="" width="" height="" time="" wait="" cross="" method="" cond=""]`
  }],
  [`bgcamera`, {
    name: `bgcamera`,
    description: `プレイヤーの使用デバイスのカメラをゲームから起動させて、カメラで撮影している映像をゲーム画面の背景として映すことができます。現実の風景や自分にキャラクターを重ねて記念撮影できるアプリが簡単につくれます。`,
    params: [
      { name: `name`, required: false, description: `[anim]タグなどからこの名前でアニメーションさせられます。カンマで区切ることで複数指定できます。（高度な知識：name属性で指定した値はHTMLのクラス属性になります）` },
      { name: `wait`, required: false, description: `trueを指定するとカメラ入力の表示を待ちます。` },
      { name: `time`, required: false, description: `カメラ入力領域が表示されるフェードイン時間をミリ秒で指定します。` },
      { name: `fit`, required: false, description: `比率を崩しても全画面に配置するならtrue。比率を保持して配置するならfalse。カメラの解像度によっては黒塗りの部分ができる可能性があります。` },
      { name: `left`, required: false, description: `カメラを配置する位置を指定できます。（ピクセル）` },
      { name: `top`, required: false, description: `カメラを配置する位置を指定できます。（ピクセル）` },
      { name: `width`, required: false, description: `カメラを配置するエリアの幅を指定します。（ピクセル）` },
      { name: `height`, required: false, description: `カメラを配置するエリアの高さを指定します。（ピクセル）` },
      { name: `mode`, required: false, description: `front(前面カメラ)、back(背面カメラ)を指定します。何も指定しないと標準のカメラが選択されます。` },
      { name: `qrcode`, required: false, description: `QRコードを読み込んだときの動作を設定できます。 jump(ゲーム内移動のQRのみ反応) web(他サイトへのリンクだけ反応) define([qr_define]で定義したものだけに反応) all(すべてに反応) off(QRコードに反応しない)` },
      { name: `debug`, required: false, description: `QRコードが読み込まれたときにURLを表示するか否かを指定できます。デフォルトはfalse。trueでURLをアラート表示できます。` },
      { name: `audio`, required: false, description: `音声入力も反映するか否か。trueを指定すると音声もゲームに反映されます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[bgcamera name="" wait="" time="" fit="" left="" top="" width="" height="" mode="" qrcode="" debug="" audio="" cond=""]`
  }],
  [`bgmopt`, {
    name: `bgmopt`,
    description: `BGMの設定を変更できます。`,
    params: [
      { name: `volume`, required: false, description: `BGMのコンフィグ音量を0〜100で指定できます。` },
      { name: `buf`, required: false, description: `設定を変更するスロットを指定できます。省略すると、全スロット共通の音量が設定されます。` },
      { name: `effect`, required: false, description: `コンフィグ音量の変更を現在再生中のBGMに即反映するかどうか。trueまたはfalseで指定します。` },
      { name: `time`, required: false, description: `音量の変更を即反映する場合のフェード時間をミリ秒単位で指定できます。` },
      { name: `tag_volume`, required: false, description: `0〜100を指定して、現在再生中のBGMのタグ音量を変更できます。タグ音量とは[playbgm]タグに指定されていた音量のことです。この機能はたとえば、もともと[playbgm volume="50"]で再生され始めたBGMの音量を、[playbgm volume="100"]で再生されていた場合の音量に修正したい、というケースで使用可能です。これを指定しただけではコンフィグ音量は変更されません。これを指定すると、effectが強制的にtrueになります。` },
      { name: `samebgm_restart`, required: false, description: `[playbgm]タグで再生しようとしたBGMがすでに再生中だった場合の処理を設定できます。trueなら最初から再生し直し、falseならスルー。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[bgmopt volume="" buf="" effect="" time="" tag_volume="" samebgm_restart="" cond=""]`
  }],
  [`bgmovie`, {
    name: `bgmovie`,
    description: `ゲーム画面の背景に動画を使用できます。動画ファイルはdata/videoフォルダに配置します。`,
    params: [
      { name: `storage`, required: true, description: `再生する動画ファイルを指定します。` },
      { name: `time`, required: false, description: `フェードイン時間をミリ秒で指定します。` },
      { name: `mute`, required: false, description: `動画の音をミュートするかどうか。trueまたはfalseで指定します。ブラウザ上では動画を再生する前にユーザアクション（タップなど）が必要という制限がありますが、trueを指定することでこの制限を無視できます。` },
      { name: `volume`, required: false, description: `動画の音量を0〜100で指定します。` },
      { name: `loop`, required: false, description: `背景動画をループさせるかどうか。trueまたはfalseで指定します。falseを指定すると動画の最後の状態で停止します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[bgmovie storage="" time="" mute="" volume="" loop="" cond=""]`
  }],
  [`body`, {
    name: `body`,
    description: `ゲーム画面サイズやゲーム画面外側の黒帯部分をカスタマイズできます。黒帯部分の色を変更したり、黒帯部分に画像を設定したり、ゲーム画面サイズをゲーム中に変更したりできます。`,
    params: [
      { name: `bgimage`, required: false, description: `ゲーム画面外の背景に設定する画像を指定します。bgimageフォルダに配置してください。` },
      { name: `bgrepeat`, required: false, description: `背景に画像を指定した際の表示パターンを指定します。デフォルトは縦横に繰り返し表示されます。 repeat-x(水平方向のみ繰り返し) repeat-y(垂直方向のみ繰り返し) round(比率を崩して覆うように全画面繰り返し) no-repeat(繰り返しなし)` },
      { name: `bgcolor`, required: false, description: `背景色を0xRRGGBB形式で指定します。bgimageが設定されている場合は無視されます。` },
      { name: `bgcover`, required: false, description: `背景画像を画面全体に引き伸ばすかどうか。trueまたはfalseで指定します。` },
      { name: `scWidth`, required: false, description: `ゲーム画面のオリジナルの横幅をゲーム中に変更できます。レスポンシブ対応を想定したタグです。Config.tjsのscWidthに相当します。 ※「オリジナルの」は「ウィンドウサイズにフィットさせるためにゲーム画面の拡縮を行う前の」という意味で用いられています。` },
      { name: `scHeight`, required: false, description: `ゲーム画面のオリジナルの高さをゲーム中に変更できます。レスポンシブ対応を想定したタグです。Config.tjsのscHeightに相当します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[body bgimage="" bgrepeat="" bgcolor="" bgcover="" scWidth="" scHeight="" cond=""]`
  }],
  [`breakgame`, {
    name: `breakgame`,
    description: `[sleepgame]タグで保存した休止状態を破棄します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[breakgame cond=""]`
  }],
  [`button`, {
    name: `button`,
    description: `グラフィカルボタンを表示します。[link]タグの画像版となります。`,
    params: [
      { name: `graphic`, required: false, description: `ボタンにする画像を指定します。ファイルはdata/imageフォルダに配置します。` },
      { name: `folder`, required: false, description: `画像が入っているフォルダを指定できます。デフォルトでは前景レイヤ用の画像はfgimageフォルダ、背景レイヤ用の画像はbgimageフォルダと決まっていますが、これを変更できます。` },
      { name: `storage`, required: false, description: `ジャンプ先のシナリオファイル名を指定します。省略すると、現在のシナリオファイルとみなされます。` },
      { name: `target`, required: false, description: `ジャンプ先のラベル名を指定します。省略すると、シナリオファイルの先頭にジャンプします。` },
      { name: `name`, required: false, description: `[anim]タグなどからこの名前でアニメーションさせられます。カンマで区切ることで複数指定できます。（高度な知識：name属性で指定した値はHTMLのクラス属性になります）` },
      { name: `x`, required: false, description: `ボタンの横位置を指定します` },
      { name: `y`, required: false, description: `ボタンの縦位置を指定します。` },
      { name: `width`, required: false, description: `ボタンの横幅をピクセルで指定できます` },
      { name: `height`, required: false, description: `ボタンの高さをピクセルで指定できます` },
      { name: `fix`, required: false, description: `固定ボタン（セーブボタンなどの常に表示しておくボタン）にするかどうか。trueまたはfalseで指定します。通常の選択肢ボタンはfalse(デフォルト)。選択肢ボタンとは異なり、固定ボタンはそれが表示されている間も画面をクリックしてふつうにシナリオを読み進めることができます。 trueを指定すると、fixレイヤという特殊なレイヤにボタンが配置されます。fixレイヤに追加した要素を消す場合は[clearfix]タグを使います。 fixにtrueを指定した場合は別のstorageのtargetを指定して、そこにボタンが押されたときの処理を記述する必要があります。 fixにtrueを指定した場合、コールスタックが残ります。コールスタックが消化されるまではボタンが有効にならないのでご注意ください。` },
      { name: `role`, required: false, description: `ボタンに特別な機能を割り当てることができます。この場合、storageやtargetは無視されます。また、強制的にfix属性がtrueになります。指定できるキーワードは以下のとおりです。 save(セーブ画面を表示) load(ロード画面を表示) title(タイトル画面に戻る) menu(メニュー画面を表示) window(メッセージウィンドウの非表示) skip(スキップモードを開始) backlog（バックログを表示） fullscreen(フルスクリーン切り替え) quicksave(クイックセーブ実行) quickload(クイックロード実行) auto(オートモード開始) sleepgame(ゲームの状態を保存してジャンプ)` },
      { name: `exp`, required: false, description: `ボタンがクリックされた時に実行されるJSを指定できます。` },
      { name: `preexp`, required: false, description: `タグが実行された時点で、この属性に指定した値が変数preexpに格納されます。そしてボタンがクリックされた時にexp内でpreexpという変数が利用できるようになります。` },
      { name: `hint`, required: false, description: `マウスカーソルをボタンの上で静止させたときに表示されるツールチップの文字列を指定できます。` },
      { name: `clickse`, required: false, description: `ボタンをクリックした時に再生される効果音を設定できます。効果音ファイルはsoundフォルダに配置してください。` },
      { name: `enterse`, required: false, description: `ボタンの上にマウスカーソルが乗った時に再生する効果音を設定できます。効果音ファイルはsoundフォルダに配置してください` },
      { name: `leavese`, required: false, description: `ボタンの上からマウスカーソルが外れた時に再生する効果音を設定できます。効果音ファイルはsoundフォルダに配置してください。` },
      { name: `activeimg`, required: false, description: `ボタンの上でマウスボタンを押している間に切り替える画像ファイルを指定できます。ファイルはimageフォルダに配置してください。` },
      { name: `clickimg`, required: false, description: `ボタンをクリックしたあとに切り替える画像ファイルを指定できます。ファイルはimageフォルダに配置してください。` },
      { name: `enterimg`, required: false, description: `ボタンの上にマウスカーソルが乗った時に切り替える画像ファイルを指定できます。ファイルはimageフォルダに配置してください。` },
      { name: `autoimg`, required: false, description: `オートモードが開始されたときに切り替える画像ファイルを指定できます。ファイルはimageフォルダに配置してください。` },
      { name: `skipimg`, required: false, description: `スキップモードが開始されたときに切り替える画像ファイルを指定できます。ファイルはimageフォルダに配置してください。` },
      { name: `visible`, required: false, description: `最初からボタンを表示するかどうか。trueで表示、falseで非表示となります。` },
      { name: `auto_next`, required: false, description: `trueまたはfalseを指定します。これにfalseが指定してあり、かつfix=trueの場合、[return]で戻ったときに次のタグに進まなくなります。` },
      { name: `savesnap`, required: false, description: `trueまたはfalseで指定します。trueにすると、このボタンが押された時点でのセーブスナップを確保します。セーブ画面へ移動する場合はここをtrueにして、保存してからセーブを実行します。` },
      { name: `keyfocus`, required: false, description: `falseを指定すると、キーボードやゲームパッドで選択できなくなります。また1や2などの数値を指定すると、キーコンフィグのfocus_nextアクションでボタンを選択していくときの順序を指定できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[button graphic="" folder="" storage="" target="" name="" x="" y="" width="" height="" fix="" role="" exp="" preexp="" hint="" clickse="" enterse="" leavese="" activeimg="" clickimg="" enterimg="" autoimg="" skipimg="" visible="" auto_next="" savesnap="" keyfocus="" cond=""]`
  }],
  [`call`, {
    name: `call`,
    description: `指定したシナリオファイル・ラベルにジャンプします。`,
    params: [
      { name: `storage`, required: false, description: `呼び出したいサブルーチンのあるのシナリオファイルを 指定します。省略すると、現在 のシナリオファイル内であるとみなされます。` },
      { name: `target`, required: false, description: `呼び出すサブルーチンのラベルを指定します。省略すると、ファイルの先頭から実行されます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[call storage="" target="" cond=""]`
  }],
  [`camera`, {
    name: `camera`,
    description: `カメラのズームやパンのような演出ができます。
カメラ機能を使うことで、キャラクターの立ち絵の表情にフォーカスをあてたり、一枚絵のいろんな個所をズームしてみたりと多彩な演出ができます。`,
    params: [
      { name: `time`, required: false, description: `カメラが座標へ移動する時間をミリ秒で指定します。` },
      { name: `x`, required: false, description: `カメラの移動するX座標を指定します。` },
      { name: `y`, required: false, description: `カメラの移動するY座標を指定します` },
      { name: `zoom`, required: false, description: `カメラの拡大率を指定します。２と指定すると2倍ズームとなります。` },
      { name: `rotate`, required: false, description: `カメラの傾きを指定します。20と指定するとカメラが20度傾きます。` },
      { name: `from_x`, required: false, description: `カメラの移動開始時のX座標を指定できます。` },
      { name: `from_y`, required: false, description: `カメラの移動開始時のY座標を指定できます。` },
      { name: `from_zoom`, required: false, description: `カメラの移動開始時の倍率を指定できます。` },
      { name: `from_rotate`, required: false, description: `カメラの移動開始時の傾きを指定できます。` },
      { name: `wait`, required: false, description: `カメラ移動の完了を待つかどうかをtrueまたはfalseで指定します。falseを指定するとカメラ移動中もゲームを進行できます。` },
      { name: `layer`, required: false, description: `カメラの効果を与えるレイヤを指定します。背景ならbase、前景レイヤなら0以上の数字。これを指定すると、カメラの影響を特定レイヤに限定できます。通常はすべてのレイヤに対して影響を及ぼします。` },
      { name: `ease_type`, required: false, description: `カメラの移動演出を指定できます。 ease(開始時点と終了時点を滑らかに再生する) linear(一定の速度で再生する) ease-in(開始時点をゆっくり再生する) ease-out(終了時点をゆっくり再生する) ease-in-out(開始時点と終了時点をゆっくり再生する)` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[camera time="" x="" y="" zoom="" rotate="" from_x="" from_y="" from_zoom="" from_rotate="" wait="" layer="" ease_type="" cond=""]`
  }],
  [`cancelskip`, {
    name: `cancelskip`,
    description: `スキップモードを解除します。[skipstop]と同じ動作。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[cancelskip cond=""]`
  }],
  [`changevol`, {
    name: `changevol`,
    description: `現在再生中のオーディオの音量を変更できます。`,
    params: [
      { name: `target`, required: false, description: `BGMの音量を変更する場合は"bgm"、SEの音量を変更する場合は"se"と指定します。` },
      { name: `volume`, required: false, description: `音量を0〜100で指定します。` },
      { name: `buf`, required: false, description: `設定を変更するスロットを指定できます。省略すると、全スロットの音声に対して処理が実行されます。` },
      { name: `time`, required: false, description: `フェード時間をミリ秒単位で指定できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[changevol target="" volume="" buf="" time="" cond=""]`
  }],
  [`chara_config`, {
    name: `chara_config`,
    description: `キャラクター操作タグの基本設定を変更できます`,
    params: [
      { name: `pos_mode`, required: false, description: `trueまたはfalseを指定します。デフォルトはtrueです。trueの場合、[chara_show]タグでキャラクターを表示したときの立ち位置を自動的に計算して配置します。` },
      { name: `ptext`, required: false, description: `[ptext]で作っておいた、キャラクターの名前を表示するためのテキスト領域のnameを指定します。詳しくは[chara_ptext]の項目を参照してください。` },
      { name: `time`, required: false, description: `[chara_mod]タグで表情を変える際のクロスフェード時間をミリ秒で指定します。0を指定すると瞬間的に切り替わります。` },
      { name: `memory`, required: false, description: `キャラクターを退場させたときの表情を記憶しておくかどうか。trueまたはfalseを指定します。trueを指定すると、キャラクターを再登場させたときに、前回退場時の表情のまま表示されます。` },
      { name: `anim`, required: false, description: `pos_mode=trueによってキャラクターの自動配置が有効になっている場合に、キャラクターの立ち位置変化のアニメーションを行うかどうか。trueまたはfalseで指定します。` },
      { name: `pos_change_time`, required: false, description: `キャラクターの位置を自動で調整する際のアニメーション時間をミリ秒で指定します。` },
      { name: `talk_focus`, required: false, description: `現在話しているキャラクターの立ち絵を目立たせる演出を有効にするための設定です。以下のキーワードが指定できます。brightness(明度)、blur(ぼかし)、none(無効) 現在誰が話しているかの指定は[chara_ptext]タグもしくはその省略表記である#akaneのような記述で行います。` },
      { name: `brightness_value`, required: false, description: `talk_focus=brightnessの場合の、話していないキャラクターの明度を0〜100で指定します。デフォルトは60。つまり、話していないキャラクターをちょっと暗くします。` },
      { name: `blur_value`, required: false, description: `talk_focus=blurの場合の、話していないキャラクターのぼかし度合を数値で指定します。デフォルトは2。数値が大きくなるほど強くぼけるようになります。` },
      { name: `talk_anim`, required: false, description: `キャラクターが話し始めるときに、キャラクターの立ち絵にピョンと跳ねるようなアニメーション演出を自動で加えることができる設定です。以下のキーワードが指定できます。up（上に跳ねる）、down(下に沈む)、zoom（拡大）、none(無効)` },
      { name: `talk_anim_time`, required: false, description: `talk_animが有効な場合の、アニメーション時間をミリ秒で指定できます。` },
      { name: `talk_anim_value`, required: false, description: `talk_animが有効な場合の、キャラクターの移動量を指定できます。（ピクセル）` },
      { name: `talk_anim_zoom_rate`, required: false, description: `talk_animでzoomを使用している場合の拡大率を指定します。デフォルトは1.2` },
      { name: `effect`, required: false, description: `キャラクターが位置を入れ替わる際のエフェクト（動き方）を指定できます。指定できるキーワードは次のとおりです。jswingdefeaseInQuadeaseOutQuadeaseInOutQuadeaseInCubiceaseOutCubiceaseInOutCubiceaseInQuarteaseOutQuarteaseInOutQuarteaseInQuinteaseOutQuinteaseInOutQuinteaseInSineeaseOutSineeaseInOutSineeaseInExpoeaseOutExpoeaseInOutExpoeaseInCirceaseOutCirceaseInOutCirceaseInElasticeaseOutElasticeaseInOutElasticeaseInBackeaseOutBackeaseInOutBackeaseInBounceeaseOutBounceeaseInOutBounce` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[chara_config pos_mode="" ptext="" time="" memory="" anim="" pos_change_time="" talk_focus="" brightness_value="" blur_value="" talk_anim="" talk_anim_time="" talk_anim_value="" talk_anim_zoom_rate="" effect="" cond=""]`
  }],
  [`chara_delete`, {
    name: `chara_delete`,
    description: `キャラクターの定義情報を削除します。`,
    params: [
      { name: `name`, required: true, description: `[chara_new]で定義したname属性を指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[chara_delete name="" cond=""]`
  }],
  [`chara_face`, {
    name: `chara_face`,
    description: `キャラクターの表情画像を登録できます。`,
    params: [
      { name: `name`, required: true, description: `表情を登録するキャラクターの名前。[chara_new]で定義したname属性を指定します。` },
      { name: `face`, required: true, description: `登録する表情の名前を指定します。happyangryなど、自分がわかりやすいものを自由につけましょう。` },
      { name: `storage`, required: true, description: `画像ファイルを指定します。画像ファイルはdata/fgimageフォルダに配置します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[chara_face name="" face="" storage="" cond=""]`
  }],
  [`chara_hide`, {
    name: `chara_hide`,
    description: `[chara_show]タグで表示したキャラクターを退場させます。`,
    params: [
      { name: `name`, required: true, description: `[chara_new]で定義したname属性を指定します。` },
      { name: `time`, required: false, description: `フェードアウト時間をミリ秒で指定します。` },
      { name: `wait`, required: false, description: `フェードアウトの完了を待つかどうか。trueまたはfalseで指定します。` },
      { name: `layer`, required: false, description: `削除対象のレイヤ。[chara_show]でにレイヤ指定した場合はここでも指定します。` },
      { name: `pos_mode`, required: false, description: `キャラクターの立ち位置自動調整が有効な場合に、このパラメータにfalseを指定すると退場後に立ち位置の調整を行いません。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[chara_hide name="" time="" wait="" layer="" pos_mode="" cond=""]`
  }],
  [`chara_hide_all`, {
    name: `chara_hide_all`,
    description: `[chara_show]タグで表示したキャラクターを全員退場させます。`,
    params: [
      { name: `time`, required: false, description: `フェードアウト時間をミリ秒で指定します。` },
      { name: `wait`, required: false, description: `フェードアウトの完了を待つかどうか。trueまたはfalseで指定します。` },
      { name: `layer`, required: false, description: `削除対象のレイヤ。[chara_show]でにレイヤ指定した場合はここでも指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[chara_hide_all time="" wait="" layer="" cond=""]`
  }],
  [`chara_layer`, {
    name: `chara_layer`,
    description: `キャラクターの表情を差分パーツを定義します。
デフォルトのパーツは一番最初に登録したものになります。`,
    params: [
      { name: `name`, required: true, description: `パーツを登録するキャラクターの名前。[chara_new]で定義したname属性を指定します。` },
      { name: `part`, required: true, description: `パーツとして登録する名前を指定します。例えば目というパーツをpartを登録しておき、このpartの中で他の差分をいくつでも登録できます。` },
      { name: `id`, required: true, description: `パーツの中の差分を識別するための名前を指定します。例えば目というpartの中で笑顔の目泣いてる目のようにidを分けて登録できます。` },
      { name: `storage`, required: false, description: `差分として登録する画像を指定します。画像はdata/fgimageフォルダの中に配置します。noneを指定すると、デフォルトでそのパーツがない状態を表現できます。` },
      { name: `zindex`, required: false, description: `このパーツが他のパーツと重なった時にどちらが前面に表示されるかを決定するための優先度を数字で指定します。数字が大きいほど前面に表示されます。一度登録しておけば、同パーツの他の差分にも適用されます。` },
      { name: `frame_image`, required: false, description: `パーツアニメーション（目パチ等）の差分画像。カンマ区切りで複数指定できます。storageに指定した画像と拡張子が同じである場合、拡張子を省略して書くことができます。（アニメーションに使用する画像は、storageに指定した画像と同じ場所に配置します。アニメーションに使用する画像のファイル名が空白記号から始まっていてはいけません）` },
      { name: `frame_time`, required: false, description: `パーツアニメーションの各コマの時間。ミリ秒単位の数値をカンマ区切りで記述します。storageに指定した画像の分も含めて指定します。ハイフンで区切った2個1組の数値を指定することで、その範囲からランダムで決定されるようにできます。目パチの時間にバラつきをもたせたい場合に使用できます。省略した場合、標準的な目パチの頻度・速度を想定し、4000-8000,50,50,50...が設定されます。` },
      { name: `frame_direction`, required: false, description: `最後のコマを表示したあとすぐ最初のコマに戻るのではなく逆順にコマを表示していく（0→1→2→1→0）ようにしたい場合、alternateを指定します。` },
      { name: `frame_loop`, required: false, description: `アニメーションをループさせずに最後のコマで止めたい場合はfalseを指定します。` },
      { name: `lip_image`, required: false, description: `口パクに使用する画像ファイル。frame_imageと同じように指定します。なお、frame_imageとlip_imageを併用することはできません。音声ファイルによるリップシンクを行う場合には、より口が閉じている画像から順に書きます。` },
      { name: `lip_time`, required: false, description: `口パクの画像を切り替える時間をミリ秒単位で指定します。省略した場合は50ミリ秒となります。` },
      { name: `lip_type`, required: false, description: `音声ファイル（ボイス）によるリップシンクを行いたい場合はvoiceを指定します。省略した場合はテキストベースの口パクになります。` },
      { name: `lip_volume`, required: false, description: `音声ファイルによるリップシンクを行う場合に、画像を切り替える音量の区切りをカンマ区切りの数値で指定します。音量は音声ファイル再生中にリアルタイムに解析され、0～100で表されます。数値はlip_imageで指定した画像の数だけ必要です。このパラメータは省略してもかまいませんが、違和感がある場合は微調整を推奨します。` },
      { name: `lip_se_buf`, required: false, description: `リップシンクの対象とする[playse]のbufを指定します。ここで指定したbufで[playse]が実行されたとき、chara_ptextにこのキャラの名前が入っているなら、このキャラのリップシンクを開始します。` },
      { name: `lip_se_buf_all`, required: false, description: `リップシンクの対象とする[playse]のbufを指定します。ここで指定されたbufで実行されたすべての[playse]について、このキャラのリップシンクを開始します。（chara_ptextに関係なく）` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[chara_layer name="" part="" id="" storage="" zindex="" frame_image="" frame_time="" frame_direction="" frame_loop="" lip_image="" lip_time="" lip_type="" lip_volume="" lip_se_buf="" lip_se_buf_all="" cond=""]`
  }],
  [`chara_layer_mod`, {
    name: `chara_layer_mod`,
    description: `[chara_layer]タグで定義した設定を変更できます。`,
    params: [
      { name: `name`, required: true, description: `パーツ定義の変更対象となるキャラクターの名前。[chara_new]で定義したname属性を指定します。` },
      { name: `part`, required: true, description: `変更したいパーツ名を指定します。` },
      { name: `zindex`, required: false, description: `このパーツが他のパーツと重なった時にどちらが前面に表示されるかを決定するための優先度を数字で指定します。数字が大きいほど前面に表示されます。この設定は即時反映されません。次回表示時に反映されます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[chara_layer_mod name="" part="" zindex="" cond=""]`
  }],
  [`chara_mod`, {
    name: `chara_mod`,
    description: `キャラクター画像を変更します。表情変更に活用できます。`,
    params: [
      { name: `name`, required: true, description: `[chara_new]で定義したnameを指定します。` },
      { name: `face`, required: false, description: `[chara_face]で定義したfaceを指定します。` },
      { name: `time`, required: false, description: `[chara_mod]タグで表情を変える際のクロスフェード時間をミリ秒で指定します。0を指定すると瞬間的に切り替わります。` },
      { name: `storage`, required: false, description: `変更する画像ファイルを指定します。画像ファイルはdata/fgimageフォルダに配置します。` },
      { name: `reflect`, required: false, description: `画像を左右反転するかどうか。trueまたはfalseで指定します。trueを指定すると、画像を左右反転して表示します。` },
      { name: `wait`, required: false, description: `表情変更のクロスフェードが終わるのを待つかどうか。trueまたはfalseで指定します。` },
      { name: `cross`, required: false, description: `クロスフェードの方式をtrueまたはfalseを指定します。trueを指定すると、旧画像がフェードアウトさせるのと同時に新画像をフェードインさせます。falseを指定すると、旧画像を残したままその上に新画像をフェードインさせます。 trueの場合、クロスフェードの瞬間にキャラクターが若干透けて背景が見えてしまうことがあります。そのような場合はfalseを指定することでキャラクターを透けさせずに表情変更ができます。ただし透けなくはなりますが、シルエットが変わるような表情変更の場合は違和感が出ることがあります。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[chara_mod name="" face="" time="" storage="" reflect="" wait="" cross="" cond=""]`
  }],
  [`chara_move`, {
    name: `chara_move`,
    description: `キャラクターの立ち位置や大きさを変更します。指定時間をかけてアニメ―ションさせることもできます。`,
    params: [
      { name: `name`, required: true, description: `[chara_new]で定義したnameを指定します。` },
      { name: `left`, required: false, description: `変更後の横位置を指定できます。left="+=200"left="-=200"のように指定すると、「いまの場所からどれだけ動くか」という相対指定ができます。` },
      { name: `top`, required: false, description: `変更後の縦位置を指定できます。top="+=100"top="-=100"のように指定すると、「いまの場所からどれだけ動くか」という相対指定ができます。` },
      { name: `width`, required: false, description: `変更後の横幅を指定できます。` },
      { name: `height`, required: false, description: `変更後の高さを指定できます。` },
      { name: `anim`, required: false, description: `アニメーションさせるかどうか。trueかfalseで指定します。trueを指定すると、位置を変更するときにアニメーションさせることができます。この場合、アニメーション効果は[chara_config]のeffectパラメータを参照します。` },
      { name: `time`, required: false, description: `アニメーション時間をミリ秒で指定します。` },
      { name: `wait`, required: false, description: `アニメーションの完了を待つかどうか。trueかfalseで指定します。` },
      { name: `effect`, required: false, description: `変化のエフェクトを指定します。以下のキーワードが指定できます。jswingdefeaseInQuadeaseOutQuadeaseInOutQuadeaseInCubiceaseOutCubiceaseInOutCubiceaseInQuarteaseOutQuarteaseInOutQuarteaseInQuinteaseOutQuinteaseInOutQuinteaseInSineeaseOutSineeaseInOutSineeaseInExpoeaseOutExpoeaseInOutExpoeaseInCirceaseOutCirceaseInOutCirceaseInElasticeaseOutElasticeaseInOutElasticeaseInBackeaseOutBackeaseInOutBackeaseInBounceeaseOutBounceeaseInOutBounce` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[chara_move name="" left="" top="" width="" height="" anim="" time="" wait="" effect="" cond=""]`
  }],
  [`chara_new`, {
    name: `chara_new`,
    description: `登場するキャラクターの情報を定義します。`,
    params: [
      { name: `name`, required: true, description: `キャラクターを管理するための名前を半角英数で指定します。このnameは必ずユニーク（一意、固有）である必要があります。すなわち、他のキャラクターとnameが重複してはいけません。また[ptext][image]などのタグに指定するnameとも重複してはいけません。` },
      { name: `storage`, required: true, description: `キャラクター画像を指定します。画像ファイルはdata/fgimageフォルダに配置します。` },
      { name: `width`, required: false, description: `画像の横幅を指定できます。` },
      { name: `height`, required: false, description: `画像の高さを指定できます。` },
      { name: `reflect`, required: false, description: `画像を左右反転するかどうか。trueまたはfalseで指定します。trueを指定すると、画像を左右反転して表示します。` },
      { name: `color`, required: false, description: `キャラクターの名前を表示するときの色を指定できます。0xRRGGBB形式で指定します。` },
      { name: `jname`, required: false, description: `このキャラクターをネームスペースに表示する場合、適用する名称を指定できます。例えば、#yuko と指定すると　メッセージエリアに　ゆうこ　と表示できます` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[chara_new name="" storage="" width="" height="" reflect="" color="" jname="" cond=""]`
  }],
  [`chara_part`, {
    name: `chara_part`,
    description: `[chara_layer]タグで定義したパーツ差分の実際の表示を切り替えます。`,
    params: [
      { name: `name`, required: true, description: `[chara_new]で指定したキャラクター名を指定します。` },
      { name: `time`, required: false, description: `パーツが表示されるまでのフェードイン時間を指定できます。ミリ秒で指定します。` },
      { name: `wait`, required: false, description: `フェードインの完了を待つかどうか。trueまたはfalseで指定します。` },
      { name: `allow_storage`, required: false, description: `trueまたはfalse。trueを指定すると、partの指定にidではなく直接画像ファイルを指定できます。画像はfgimageフォルダに配置してください。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[chara_part name="" time="" wait="" allow_storage="" cond=""]`
  }],
  [`chara_part_reset`, {
    name: `chara_part_reset`,
    description: `[chara_part]で差分を変更した際、デフォルトの表情に戻すことができます。
キャラクターが表示されている場合は即時デフォルトに戻ります。`,
    params: [
      { name: `name`, required: true, description: `[chara_new]で指定したキャラクター名を指定します。` },
      { name: `part`, required: false, description: `特定のpartに絞ってリセットすることが可能です。カンマ区切りで複数指定が可能です。省略すると、すべてのパーツをデフォルトに戻します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[chara_part_reset name="" part="" cond=""]`
  }],
  [`chara_ptext`, {
    name: `chara_ptext`,
    description: `キャラクターの名前を表示するためのタグです。いましゃべっているキャラクターの名前をメッセージウィンドウの上部に出すのが主な使い方になるでしょう。face属性を指定することで、名前を出すと同時にそのキャラクターの表情を変更することもできます。`,
    params: [
      { name: `name`, required: false, description: `[chara_new]タグで定義したnameを指定します。それをひもついたjnameがテキストエリアに表示されます。そのnameのキャラクター定義が存在しなかった場合、nameに指定された内容がそのままテキストエリアに表示されます。` },
      { name: `face`, required: false, description: `[chara_face]タグで定義したfaceを指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[chara_ptext name="" face="" cond=""]`
  }],
  [`chara_show`, {
    name: `chara_show`,
    description: `定義しておいたキャラクターを画面に表示します。`,
    params: [
      { name: `name`, required: true, description: `[chara_new]で定義したname属性を指定します。` },
      { name: `time`, required: false, description: `ミリ秒で指定します。指定した時間をかけて登場します。` },
      { name: `layer`, required: false, description: `キャラクターを配置するレイヤを0以上の整数で指定します。` },
      { name: `zindex`, required: false, description: `キャラクターの重なりを指定できます。ここで指定した値が大きいほうが前に表示できます。省略すると、後に登場するキャラクターが前に表示されます。"` },
      { name: `depth`, required: false, description: `zindexが同一な場合の重なりをfront(最前面)、back(最後面) で指定できます。` },
      { name: `page`, required: false, description: `foreかbackを指定します。` },
      { name: `wait`, required: false, description: `trueを指定すると、キャラクターの登場完了を待ちます。` },
      { name: `face`, required: false, description: `[chara_face]タグで定義したface属性を指定します。` },
      { name: `storage`, required: false, description: `変更する画像ファイルを指定します。画像ファイルはdata/fgimageフォルダに配置します。` },
      { name: `reflect`, required: false, description: `画像を左右反転するかどうか。trueまたはfalseで指定します。trueを指定すると、画像を左右反転して表示します。` },
      { name: `width`, required: false, description: `キャラクターの横幅を指定できます。` },
      { name: `height`, required: false, description: `キャラクターの縦幅を指定できます。` },
      { name: `left`, required: false, description: `キャラクターの横位置を指定できます。指定した場合、自動配置が有効であっても無効になります。` },
      { name: `top`, required: false, description: `キャラクターの縦位置を指定できます。指定した場合、自動配置が有効であっても無効になります。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[chara_show name="" time="" layer="" zindex="" depth="" page="" wait="" face="" storage="" reflect="" width="" height="" left="" top="" cond=""]`
  }],
  [`check_web_patch`, {
    name: `check_web_patch`,
    description: `V470以降で使用可。PCアプリとして配布している場合のみ有効です。`,
    params: [
      { name: `url`, required: true, description: `パッチのjsonファイルのURLを指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[check_web_patch url="" cond=""]`
  }],
  [`checkpoint`, {
    name: `checkpoint`,
    description: `[rollback]タグでチェックポイントの地点へ戻ってくることができます。
チェックポイントを作りすぎるとゲームの動作が重くなる場合があります。
必要最低限に留めておき、不要になったら[clear_checkpoint]タグで削除しましょう。`,
    params: [
      { name: `name`, required: true, description: `チェックポイント名を指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[checkpoint name="" cond=""]`
  }],
  [`clear_checkpoint`, {
    name: `clear_checkpoint`,
    description: `[checkpoint]タグをクリアすることができます。
チェックポイントは便利ですが不用意に増やしすぎるとゲームの動作に影響します。
不要になったチェックポイントはこまめに削除しておきましょう。`,
    params: [
      { name: `name`, required: false, description: `削除するチェックポイント名を指定します。指定しない場合はすべてのチェックポイントが削除されます` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[clear_checkpoint name="" cond=""]`
  }],
  [`clearfix`, {
    name: `clearfix`,
    description: `fixレイヤーの要素を消去します。name属性を指定することで特定の要素のみを消去することもできます。`,
    params: [
      { name: `name`, required: false, description: `これを指定すると、該当する要素だけを消去することができます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[clearfix name="" cond=""]`
  }],
  [`clearstack`, {
    name: `clearstack`,
    description: `システムが管理するスタックを消去します。帰るべきスタックがない場面（タイトルや章の始まりなど、きりの良い場面）でこのタグを配置しておくことをオススメします。`,
    params: [
      { name: `stack`, required: false, description: `call、if、macroのいずれかを指定できます。特定のスタックのみ削除できます。省略すると、全てのスタックを削除します。 V515以降：animを指定できます。animを指定した場合、現在実行中のアニメーション数を強制的にゼロにして、[wa]で確実に次のタグに進むようにできます。なお、stackパラメータを省略した場合はこの操作は行われません。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[clearstack stack="" cond=""]`
  }],
  [`clearsysvar`, {
    name: `clearsysvar`,
    description: `システム変数を全消去します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[clearsysvar cond=""]`
  }],
  [`clearvar`, {
    name: `clearvar`,
    description: `変数を消去します。特定の変数だけを消去することもできます。`,
    params: [
      { name: `exp`, required: false, description: `消去する変数名を指定します。f.nameやsf.flagのように指定します。nameflagでは動作しません。 省略すると、すべての変数が消去されます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[clearvar exp="" cond=""]`
  }],
  [`clickable`, {
    name: `clickable`,
    description: `透明なクリック可能領域を設定できます。`,
    params: [
      { name: `width`, required: true, description: `領域の横幅を指定します。` },
      { name: `height`, required: true, description: `領域の高さを指定します。` },
      { name: `x`, required: false, description: `領域の左端位置のX座標を指定します。` },
      { name: `y`, required: false, description: `領域の左端位置のY座標を指定します。` },
      { name: `borderstyle`, required: false, description: `領域に表示する線のデザインを指定できます。線の太さ:線の種類:線の色のフォーマットで記述してください。各項目はCSSの記法で記述します。線の種類はsoliddoublegroovedashed dottedなどが指定できます。` },
      { name: `color`, required: false, description: `表示色を0xRRGGBB形式で指定します。` },
      { name: `opacity`, required: false, description: `領域の不透明度を0～255の数値で指定します。0で完全に透明です。` },
      { name: `mouseopacity`, required: false, description: `領域にマウスが乗ったときの不透明度を指定できます。` },
      { name: `storage`, required: false, description: `ジャンプ先のシナリオファイル名を指定します。省略すると、現在のシナリオファイルとみなされます。` },
      { name: `target`, required: false, description: `ジャンプ先のラベル名を指定します。省略すると、シナリオファイルの先頭にジャンプします。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[clickable width="" height="" x="" y="" borderstyle="" color="" opacity="" mouseopacity="" storage="" target="" cond=""]`
  }],
  [`close`, {
    name: `close`,
    description: `PCアプリの場合、ウィンドウを閉じます。
ブラウザゲームの場合、タブを閉じます。`,
    params: [
      { name: `ask`, required: false, description: `終了の確認をするかどうか。trueまたはfalseで指定します。デフォルトはtrue。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[close ask="" cond=""]`
  }],
  [`closeconfirm_off`, {
    name: `closeconfirm_off`,
    description: `このタグを通過すると、ゲームが「未保存状態」のときにプレイヤーがゲームを閉じようとしても確認ダイアログが出なくなります。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[closeconfirm_off cond=""]`
  }],
  [`closeconfirm_on`, {
    name: `closeconfirm_on`,
    description: `このタグを通過してからは、タグが進行する度にゲームが「未保存状態」になります。ゲームが「未保存状態」のときにプレイヤーがゲームを閉じようとすると、確認ダイアログが出ます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[closeconfirm_on cond=""]`
  }],
  [`cm`, {
    name: `cm`,
    description: `すべてのメッセージレイヤの文字を消去します。[button][glink][html]タグなどで表示した要素も消去されます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[cm cond=""]`
  }],
  [`commit`, {
    name: `commit`,
    description: `[edit]で表示したテキストボックスの入力内容を確定し、name属性で指定した変数に値をセットします。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[commit cond=""]`
  }],
  [`config_record_label`, {
    name: `config_record_label`,
    description: `既読管理の設定を変更できます。`,
    params: [
      { name: `color`, required: false, description: `既読テキスト色を0xRRGGBB形式で指定します。` },
      { name: `skip`, required: false, description: `プレイヤーが未読テキストをスキップできるかどうか。trueまたはfalseで指定します。falseを指定すると、プレイヤーが未読テキストに到達したときにスキップが解除されます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[config_record_label color="" skip="" cond=""]`
  }],
  [`configdelay`, {
    name: `configdelay`,
    description: `デフォルトの文字の表示速度を指定します。
つまり、[resetdelay]タグを使用したときにこの速度に戻るようになります。
コンフィグ画面などでゲーム全体の文字速度を変更したい場合にこのタグを使います。`,
    params: [
      { name: `speed`, required: false, description: `文字の表示速度を指定します。小さいほど早くなります。 ここで指定した値は、次の1文字を表示するまでの時間（ミリ秒単位）として解釈されます。たとえば1000と指定すると1秒ごとに1文字表示されていきます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[configdelay speed="" cond=""]`
  }],
  [`ct`, {
    name: `ct`,
    description: `すべてのメッセージレイヤの文字が消去されます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[ct cond=""]`
  }],
  [`current`, {
    name: `current`,
    description: `操作対象とするメッセージレイヤを指定します。以後、テキストや[font]タグでの文字属性の指定、[l]タグ等のクリック待ちなどはこのレイヤに対して行われます。`,
    params: [
      { name: `layer`, required: false, description: `操作対象のメッセージレイヤを指定します。省略すると、現在のメッセージレイヤとみなされます。` },
      { name: `page`, required: false, description: `レイヤの表ページと裏ページ、どちらを対象とするか。foreまたはbackで指定します。省略すると、表ページとみなされます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[current layer="" page="" cond=""]`
  }],
  [`cursor`, {
    name: `cursor`,
    description: `マウスカーソルに画像を設定することができます。画像はdata/imageフォルダに配置してください。使用可能な画像形式はgifpngjpgです。`,
    params: [
      { name: `storage`, required: false, description: `マウスカーソルに設定する画像ファイルを指定します。画像はdata/imageフォルダに配置します。defaultと指定するとデフォルトのカーソルに戻せます。` },
      { name: `x`, required: false, description: `指定した数値の分だけ、マウスカーソルに設定する画像を左側にずらすことができます。` },
      { name: `y`, required: false, description: `指定した数値の分だけ、マウスカーソルに設定する画像を上側にずらすことができます。` },
      { name: `type`, required: false, description: `ボタン類にマウスを載せたときのカーソルを変更したい場合、このパラメータにpointerを指定します。` },
      { name: `auto_hide`, required: false, description: `プレイヤーが一定時間マウス操作をしなかった場合にマウスカーソルを自動で非表示にするための設定です。trueで自動非表示が有効、falseで自動非表示が無効（常にマウスカーソル表示）になります。また、2000のように数値を指定することで、マウスカーソルの自動非表示を有効にした上でマウスカーソルを非表示にするまでの時間をミリ秒単位で設定できます。` },
      { name: `click_effect`, required: false, description: `クリックエフェクトを有効にするかどうか。trueまたはfalseで指定します。` },
      { name: `e_width`, required: false, description: `クリックエフェクトの横幅をpx単位で指定します。` },
      { name: `e_opacity`, required: false, description: `クリックエフェクトの最初の不透明度を0～255で指定します。` },
      { name: `e_time`, required: false, description: `クリックエフェクトの表示時間をミリ秒単位で指定します。` },
      { name: `e_color`, required: false, description: `クリックエフェクトの色を指定します。` },
      { name: `e_blend`, required: false, description: `クリックエフェクトの合成モードを指定します。[layermode]タグのmodeパラメータと同じキーワードが指定可能です。normalやoverlayなど。` },
      { name: `e_scale`, required: false, description: `クリックエフェクトの拡大率をパーセント単位で指定します。たとえば200と指定すると、エフェクトサイズが最終的に200%になるように拡大されていきます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[cursor storage="" x="" y="" type="" auto_hide="" click_effect="" e_width="" e_opacity="" e_time="" e_color="" e_blend="" e_scale="" cond=""]`
  }],
  [`deffont`, {
    name: `deffont`,
    description: `現在操作対象のメッセージレイヤに対する、デフォルトのテキストスタイルを指定します。`,
    params: [
      { name: `size`, required: false, description: `文字サイズを指定します` },
      { name: `color`, required: false, description: `文字色を0xRRGGBB形式で指定します。` },
      { name: `bold`, required: false, description: `太字にするかどうか。trueまたはfalseで指定します。` },
      { name: `italic`, required: false, description: `イタリック体にするかどうか。trueまたはfalseで指定します。` },
      { name: `face`, required: false, description: `フォントの種類を指定します。Webフォントも利用可能。Webフォントを使用する場合、フォントファイルをdata/othersフォルダに配置し、tyrano.cssで@font-faceを設定する必要があります。` },
      { name: `edge`, required: false, description: `文字の縁取りを有効にできます。縁取り色を0xRRGGBB形式等で指定します。縁取りを解除する場合はnoneと指定します。 V515以降：縁取りの太さもあわせて指定できます。4px 0xFF0000のように、色の前に縁取りの太さをpx付きで記述します。太さと色は半角スペースで区切ってください。さらに4px 0xFF0000, 2px 0xFFFFFFのようにカンマ区切りで複数の縁取りを指定できます。` },
      { name: `edge_method`, required: false, description: `縁取りの実装方式を選択できます。指定できるキーワードはshadowまたはfilter。` },
      { name: `shadow`, required: false, description: `文字に影をつけます。影の色を0xRRGGBB形式で指定します。影を解除する場合はnoneと指定します。` },
      { name: `effect`, required: false, description: `フォントの表示演出にアニメーションを設定できます。noneを指定すると無効。指定できるキーワードは以下。fadeInfadeInDownfadeInLeftfadeInRightfadeInUprotateInzoomInslideInbounceInvanishInpuffInrollInnone` },
      { name: `effect_speed`, required: false, description: `effectパラメータがnone以外の場合に、表示されるまでの時間を指定します。デフォルトは0.2sです。sは秒を表します。` },
      { name: `gradient`, required: false, description: `V515以降：文字にグラデーションを適用することができます。CSSのグラデーション関数を指定します。グラデーション関数とはlinear-gradient(45deg, red 0%, yellow 100%)のような文字列です。 グラデーション関数を簡単に作れるサイトがWeb上にいくつか存在しますので、「CSS グラデーション ジェネレーター」で検索してみてください。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[deffont size="" color="" bold="" italic="" face="" edge="" edge_method="" shadow="" effect="" effect_speed="" gradient="" cond=""]`
  }],
  [`delay`, {
    name: `delay`,
    description: `文字の表示速度を指定します。
文字表示をノーウェイトにするには[nowait]タグを使うこともできます。`,
    params: [
      { name: `speed`, required: false, description: `文字の表示速度を指定します。小さいほど早くなります。 ここで指定した値は、次の1文字を表示するまでの時間（ミリ秒）として解釈されます。たとえば1000と指定すると1秒ごとに1文字ずつ表示されます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[delay speed="" cond=""]`
  }],
  [`dialog`, {
    name: `dialog`,
    description: `確認用のダイアログを表示します。`,
    params: [
      { name: `type`, required: false, description: `ダイアログの種類を以下のキーワードのいずれかで指定します。 alert(警告) confirm(確認) input(入力)` },
      { name: `name`, required: false, description: `入力ダイアログの場合に、入力内容を保存する変数名を指定します。f.nameなど。` },
      { name: `text`, required: false, description: `ダイアログに表示するメッセージを記述します。` },
      { name: `storage`, required: false, description: `OKボタンが押されたときのジャンプ先のシナリオファイルを指定します。省略すると、現在のシナリオファイルとみなされます。` },
      { name: `target`, required: false, description: `OKボタンが押されたときのジャンプ先のラベルを指定します。省略すると、シナリオファイルの先頭とみなされます。 なお、storageとtargetが両方省略されている場合、単に次のタグに進みます。` },
      { name: `storage_cancel`, required: false, description: `キャンセルボタンが押されたときのジャンプ先のシナリオファイルを指定します。省略すると、現在のシナリオファイルとみなされます。` },
      { name: `target_cancel`, required: false, description: `キャンセルボタンが押されたときのジャンプ先のラベルを指定します。省略すると、シナリオファイルの先頭とみなされます。` },
      { name: `label_ok`, required: false, description: `OKボタンのテキストを変更できます。` },
      { name: `label_cancel`, required: false, description: `キャンセルボタンのテキストを変更できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[dialog type="" name="" text="" storage="" target="" storage_cancel="" target_cancel="" label_ok="" label_cancel="" cond=""]`
  }],
  [`dialog_config`, {
    name: `dialog_config`,
    description: `タイトルに戻っていいかどうかを確認するときなどに表示される確認ダイアログのデザインを変更することができます。ダイアログのデザインを変更するタグには以下の4種類があります。`,
    params: [
      { name: `btntype`, required: false, description: `ボタンのタイプをまとめて指定できます。指定できるキーワードは[glink]のcolorパラメータに準じます。` },
      { name: `btnwidth`, required: false, description: `ボタンの横幅をpx単位でまとめて指定できます。` },
      { name: `btnmargin`, required: false, description: `ボタンの外余白をpx単位でまとめて指定できます。カンマ区切りに対応。10,20のように指定すると、縦余白が10、横余白が20と指定したことになります。` },
      { name: `btnpadding`, required: false, description: `ボタンの内余白をpx単位でまとめて指定できます。カンマ区切りに対応。10,20のように指定すると、縦余白が10、横余白が20と指定したことになります。` },
      { name: `fontsize`, required: false, description: `メッセージの文字サイズを指定します。` },
      { name: `fontbold`, required: false, description: `メッセージを太字にする場合はtrueを指定します。` },
      { name: `fontface`, required: false, description: `メッセージのフォントを指定します。` },
      { name: `fontcolor`, required: false, description: `メッセージの文字色を指定します。` },
      { name: `btnfontsize`, required: false, description: `ボタンの文字サイズを指定します。` },
      { name: `btnfontbold`, required: false, description: `ボタンを文字を太字にする場合はtrueを指定します。` },
      { name: `btnfontface`, required: false, description: `ボタンのフォントを指定します。` },
      { name: `btnfontcolor`, required: false, description: `ボタンの文字色を指定します。` },
      { name: `boxcolor`, required: false, description: `メッセージボックスの背景色を指定できます。` },
      { name: `boxopacity`, required: false, description: `メッセージボックスの不透明度を0～255で指定できます。255で完全に不透明です。` },
      { name: `boxradius`, required: false, description: `メッセージボックスの角に丸みを付けたいときにその丸みの半径を数値で指定します。` },
      { name: `boxwidth`, required: false, description: `メッセージボックスの横幅をpx単位で指定できます。` },
      { name: `boxheight`, required: false, description: `メッセージボックスの高さpx単位で指定できます。` },
      { name: `boxpadding`, required: false, description: `メッセージボックスの内余白をpx単位で指定できます。10,20,10のようなカンマ区切りの指定に対応します。` },
      { name: `boximg`, required: false, description: `メッセージボックスの背景画像を指定できます。ファイルの場所はimageが基準となります。` },
      { name: `boximgpos`, required: false, description: `メッセージボックスの背景画像の表示位置を指定できます。たとえばcenterと指定すると画面中央、left topで左上、right topで右上、right bottomで右下、left bottomで左下となります。` },
      { name: `boximgrepeat`, required: false, description: `メッセージボックスの背景画像の繰り返しを指定できます。画像を繰り返して敷き詰める場合はrepeat、繰り返したくない場合はno-repeatを指定します。` },
      { name: `boximgsize`, required: false, description: `メッセージボックスの背景画像のサイズをpx単位で指定できます。` },
      { name: `bgcolor`, required: false, description: `ダイアログ外側の背景色を指定できます。` },
      { name: `bgopacity`, required: false, description: `ダイアログ外側の不透明度を0～255で指定できます。255で完全に不透明です。` },
      { name: `bgimg`, required: false, description: `ダイアログ外側の背景画像を指定できます。ファイルの場所はimageが基準となります。` },
      { name: `bgimgpos`, required: false, description: `ダイアログ外側の背景画像の表示位置を指定できます。たとえばcenterと指定すると画面中央、left topで左上、right topで右上、right bottomで右下、left bottomで左下となります。` },
      { name: `bgimgrepeat`, required: false, description: `ダイアログ外側の背景画像の繰り返しを指定できます。画像を繰り返して敷き詰める場合はrepeat、繰り返したくない場合はno-repeatを指定します。` },
      { name: `bgimgsize`, required: false, description: `ダイアログ外側の背景画像のサイズをpx単位で指定できます。` },
      { name: `openeffect`, required: false, description: `ダイアログを開いたときのエフェクトを指定できます。指定できるキーワードは[mask]に準じます。` },
      { name: `opentime`, required: false, description: `ダイアログを開いたときのエフェクト時間をミリ秒単位で指定できます。` },
      { name: `closeeffect`, required: false, description: `ダイアログを開いたときのエフェクトを指定できます。指定できるキーワードは[mask_off]に準じます。` },
      { name: `closetime`, required: false, description: `ダイアログを開いたときのエフェクト時間をミリ秒単位で指定できます。` },
      { name: `gotitle`, required: false, description: `タイトルに戻っていいかを確認するときのテキストを変更できます。` },
      { name: `okpos`, required: false, description: `「OK」ボタンの位置を左に変更したい場合はleft、右に変更したい場合はrightを指定します。` },
      { name: `ingame`, required: false, description: `ディスプレイ全体ではなくゲーム画面の範囲内に確認ダイアログを収めたい場合にはtrueを指定します。falseでもとに戻ります。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[dialog_config btntype="" btnwidth="" btnmargin="" btnpadding="" fontsize="" fontbold="" fontface="" fontcolor="" btnfontsize="" btnfontbold="" btnfontface="" btnfontcolor="" boxcolor="" boxopacity="" boxradius="" boxwidth="" boxheight="" boxpadding="" boximg="" boximgpos="" boximgrepeat="" boximgsize="" bgcolor="" bgopacity="" bgimg="" bgimgpos="" bgimgrepeat="" bgimgsize="" openeffect="" opentime="" closeeffect="" closetime="" gotitle="" okpos="" ingame="" cond=""]`
  }],
  [`dialog_config_filter`, {
    name: `dialog_config_filter`,
    description: `タイトルに戻っていいかどうかを確認するときなどに表示される確認ダイアログのデザインを変更することができます。ダイアログのデザインを変更するタグには以下の4種類があります。`,
    params: [
      { name: `layer`, required: false, description: `フィルタをかけるレイヤを指定します。省略すると、もしくはallと指定するとゲーム画面全てに効果がかかります。` },
      { name: `name`, required: false, description: `特定の要素にフィルタをかけたい場合に、その要素のnameを指定します。` },
      { name: `grayscale`, required: false, description: `0(デフォルト)～100を指定することで、画像の表示をグレースケールに変換できます。` },
      { name: `sepia`, required: false, description: `0(デフォルト)～100を指定することで、画像の表示をセピア調に変換できます。` },
      { name: `saturate`, required: false, description: `0～100(デフォルト)を指定してあげることで、画像の表示の彩度（色の鮮やかさ）を変更できます。` },
      { name: `hue`, required: false, description: `0(デフォルト)～360を指定することで、画像の表示の色相を変更できます。` },
      { name: `invert`, required: false, description: `0(デフォルト)～100を指定することで、画像の表示の階調を反転させることができます。` },
      { name: `opacity`, required: false, description: `0～100(デフォルト)を指定することで、画像の表示の透過度を変更できます。` },
      { name: `brightness`, required: false, description: `100(デフォルト)を基準とする数値を指定することで、画像の明度を変更できます。0で真っ暗に、100以上の数値でより明るくなります。` },
      { name: `contrast`, required: false, description: `0～100(デフォルト)を指定することで、画像の表示のコントラストを変更できます。` },
      { name: `blur`, required: false, description: `0(デフォルト)～任意の値を指定することで、画像の表示をぼかすことができます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[dialog_config_filter layer="" name="" grayscale="" sepia="" saturate="" hue="" invert="" opacity="" brightness="" contrast="" blur="" cond=""]`
  }],
  [`dialog_config_ng`, {
    name: `dialog_config_ng`,
    description: `タイトルに戻っていいかどうかを確認するときなどに表示される確認ダイアログのデザインを変更することができます。ダイアログのデザインを変更するタグには以下の4種類があります。`,
    params: [
      { name: `text`, required: false, description: `キャンセルボタンのテキストを指定できます。` },
      { name: `type`, required: false, description: `キャンセルボタンのタイプを指定できます。指定できるキーワードは[glink]のcolorパラメータに準じます。` },
      { name: `width`, required: false, description: `キャンセルボタンの横幅をpx単位で指定できます。` },
      { name: `margin`, required: false, description: `キャンセルボタンの外余白をpx単位で指定できます。カンマ区切りに対応。10,20のように指定すると、縦余白が10、横余白が20と指定したことになります。` },
      { name: `padding`, required: false, description: `キャンセルボタンの内余白をpx単位で指定できます。カンマ区切りに対応。10,20のように指定すると、縦余白が10、横余白が20と指定したことになります。` },
      { name: `fontsize`, required: false, description: `キャンセルボタンの文字サイズを指定します。` },
      { name: `fontbold`, required: false, description: `キャンセルボタンを文字を太字にする場合はtrueを指定します。` },
      { name: `fontface`, required: false, description: `キャンセルボタンのフォントを指定します。` },
      { name: `fontcolor`, required: false, description: `キャンセルボタンの文字色を指定します。` },
      { name: `img`, required: false, description: `キャンセルボタンに画像を使うことができます。imageフォルダを基準とした画像ファイルの場所を指定します。` },
      { name: `imgwidth`, required: false, description: `キャンセルボタンの画像の横幅をpx単位で指定できます。` },
      { name: `enterimg`, required: false, description: `マウスがキャンセルボタンの上に乗ったときの画像ファイル。imageフォルダから探します。` },
      { name: `activeimg`, required: false, description: `マウスがキャンセルボタンを押し込んでから放されるまでの画像ファイル。imageフォルダから探します。` },
      { name: `clickimg`, required: false, description: `マウスがキャンセルボタンをクリックした後の画像ファイル。imageフォルダから探します。` },
      { name: `enterse`, required: false, description: `マウスがキャンセルボタンの上に乗ったときに再生する音声ファイル。soundフォルダから探します。` },
      { name: `leavese`, required: false, description: `マウスがキャンセルボタンの上から離れたときに再生する音声ファイル。soundフォルダから探します。` },
      { name: `clickse`, required: false, description: `マウスがキャンセルボタンを押し込んだときに再生する音声ファイル。soundフォルダから探します。` },
      { name: `btnimgtype`, required: false, description: `このパラメータにbgを指定しておくと、imgやenterimgなどのパラメータで指定した画像がボタンの「背景」として使われるようになります。（通常、imgに画像を指定したときはテキストが消え、画像がそのままボタン化されます。つまり、画像内に「OK」などのデザインが含まれていることを想定しているということです）` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[dialog_config_ng text="" type="" width="" margin="" padding="" fontsize="" fontbold="" fontface="" fontcolor="" img="" imgwidth="" enterimg="" activeimg="" clickimg="" enterse="" leavese="" clickse="" btnimgtype="" cond=""]`
  }],
  [`dialog_config_ok`, {
    name: `dialog_config_ok`,
    description: `タイトルに戻っていいかどうかを確認するときなどに表示される確認ダイアログのデザインを変更することができます。ダイアログのデザインを変更するタグには以下の4種類があります。`,
    params: [
      { name: `text`, required: false, description: `OKボタンのテキストを指定できます。` },
      { name: `type`, required: false, description: `OKボタンのタイプを指定できます。指定できるキーワードは[glink]のcolorパラメータに準じます。` },
      { name: `width`, required: false, description: `OKボタンの横幅をpx単位で指定できます。` },
      { name: `margin`, required: false, description: `OKボタンの外余白をpx単位で指定できます。カンマ区切りに対応。10,20のように指定すると、縦余白が10、横余白が20と指定したことになります。` },
      { name: `padding`, required: false, description: `OKボタンの内余白をpx単位で指定できます。カンマ区切りに対応。10,20のように指定すると、縦余白が10、横余白が20と指定したことになります。` },
      { name: `fontsize`, required: false, description: `OKボタンの文字サイズを指定します。` },
      { name: `fontbold`, required: false, description: `OKボタンを文字を太字にする場合はtrueを指定します。` },
      { name: `fontface`, required: false, description: `OKボタンのフォントを指定します。` },
      { name: `fontcolor`, required: false, description: `OKボタンの文字色を指定します。` },
      { name: `img`, required: false, description: `OKボタンに画像を使うことができます。imageフォルダを基準とした画像ファイルの場所を指定します。` },
      { name: `imgwidth`, required: false, description: `OKボタンの画像の横幅をpx単位で指定できます。` },
      { name: `enterimg`, required: false, description: `マウスがOKボタンの上に乗ったときの画像ファイル。imageフォルダから探します。` },
      { name: `activeimg`, required: false, description: `マウスがOKボタンを押し込んでから放されるまでの画像ファイル。imageフォルダから探します。` },
      { name: `clickimg`, required: false, description: `マウスがOKボタンをクリックした後の画像ファイル。imageフォルダから探します。` },
      { name: `enterse`, required: false, description: `マウスがOKボタンの上に乗ったときに再生する音声ファイル。soundフォルダから探します。` },
      { name: `leavese`, required: false, description: `マウスがOKボタンの上から離れたときに再生する音声ファイル。soundフォルダから探します。` },
      { name: `clickse`, required: false, description: `マウスがOKボタンを押し込んだときに再生する音声ファイル。soundフォルダから探します。` },
      { name: `btnimgtype`, required: false, description: `このパラメータにbgを指定しておくと、imgやenterimgなどのパラメータで指定した画像がボタンの「背景」として使われるようになります。（通常、imgに画像を指定したときはテキストが消え、画像がそのままボタン化されます。つまり、画像内に「OK」などのデザインが含まれていることを想定しているということです）` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[dialog_config_ok text="" type="" width="" margin="" padding="" fontsize="" fontbold="" fontface="" fontcolor="" img="" imgwidth="" enterimg="" activeimg="" clickimg="" enterse="" leavese="" clickse="" btnimgtype="" cond=""]`
  }],
  [`edit`, {
    name: `edit`,
    description: `プレイヤーが入力可能なテキストボックスを表示します。`,
    params: [
      { name: `name`, required: true, description: `プレイヤーの入力テキストを保存する変数名を指定してください。` },
      { name: `initial`, required: false, description: `テキストボックスの初期値を設定できます。` },
      { name: `color`, required: false, description: `文字の色を指定します。` },
      { name: `left`, required: false, description: `テキストボックスの横位置を指定します。` },
      { name: `top`, required: false, description: `テキストボックスの縦位置を指定します。` },
      { name: `autocomplete`, required: false, description: `入力の履歴を表示するかどうか。trueまたはfalseで指定します。` },
      { name: `size`, required: false, description: `文字のサイズを指定します。` },
      { name: `width`, required: false, description: `テキストボックスの横幅を指定します。` },
      { name: `height`, required: false, description: `テキストボックスの高さを指定します。` },
      { name: `maxchars`, required: false, description: `最大入力文字数を指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[edit name="" initial="" color="" left="" top="" autocomplete="" size="" width="" height="" maxchars="" cond=""]`
  }],
  [`else`, {
    name: `else`,
    description: `[if]もしくは[elsif]タグと[endif]タグの間で用いられます。 このタグまでに記述された[if][elsif]タグの条件をまだ満たしていない場合に、このタグから[endif]までの記述が実行されます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[else cond=""]`
  }],
  [`elsif`, {
    name: `elsif`,
    description: `[if]タグと[endif]タグの間で使います。分岐の条件を増やして、複雑な分岐を行なうことができます。`,
    params: [
      { name: `exp`, required: true, description: `評価する JS 式を指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[elsif exp="" cond=""]`
  }],
  [`emb`, {
    name: `emb`,
    description: `expで指定されたJavaScriptの文を評価し、その結果をテキストとして表示します。`,
    params: [
      { name: `exp`, required: true, description: `評価するJavaScriptの式を指定します。基本的には変数の名前を指定すればよいでしょう。f.namesf.textなど。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[emb exp="" cond=""]`
  }],
  [`endhtml`, {
    name: `endhtml`,
    description: `HTMLの記述を終了します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[endhtml cond=""]`
  }],
  [`endif`, {
    name: `endif`,
    description: `[if]文を終了します。[if]文の終わりに必ず記述する必要があります。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[endif cond=""]`
  }],
  [`endignore`, {
    name: `endignore`,
    description: `[ignore]の記述を終了します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[endignore cond=""]`
  }],
  [`endkeyframe`, {
    name: `endkeyframe`,
    description: `キーフレームアニメーション定義を終了します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[endkeyframe cond=""]`
  }],
  [`endlink`, {
    name: `endlink`,
    description: `[link]タグと組み合わせて使います。リンク化を終了します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[endlink cond=""]`
  }],
  [`endmacro`, {
    name: `endmacro`,
    description: `マクロの記述を終了します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[endmacro cond=""]`
  }],
  [`endmark`, {
    name: `endmark`,
    description: `[mark]タグで開始したテキストマーカーを終了します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[endmark cond=""]`
  }],
  [`endnolog`, {
    name: `endnolog`,
    description: `[nolog]タグで一時停止したバックログへの記録を再開します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[endnolog cond=""]`
  }],
  [`endnowait`, {
    name: `endnowait`,
    description: `[nowait]によるテキスト瞬間表示モードを停止します。
テキストの表示速度は[nowait]タグを指定する前の状態に戻ります。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[endnowait cond=""]`
  }],
  [`endscript`, {
    name: `endscript`,
    description: `JavaScriptの記述を終了します。`,
    params: [
      { name: `stop`, required: false, description: `【高度】trueを指定すると、[endscript]に到達したときに次のタグに進まなくなります。JavaScriptの記述によってシナリオをジャンプさせたい場合にtrueを指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[endscript stop="" cond=""]`
  }],
  [`er`, {
    name: `er`,
    description: `現在の操作対象のメッセージレイヤの文字を消去します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[er cond=""]`
  }],
  [`erasemacro`, {
    name: `erasemacro`,
    description: `登録したマクロを削除します。`,
    params: [
      { name: `name`, required: true, description: `削除するマクロ名を指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[erasemacro name="" cond=""]`
  }],
  [`eval`, {
    name: `eval`,
    description: `expに指定されたJavaScriptの文を実行します。主に変数に値をセットする際に活用できます。`,
    params: [
      { name: `exp`, required: true, description: `実行するJavaScript文を指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[eval exp="" cond=""]`
  }],
  [`fadeinbgm`, {
    name: `fadeinbgm`,
    description: `BGMを徐々に再生します。`,
    params: [
      { name: `storage`, required: true, description: `再生する音楽ファイルを指定します。` },
      { name: `loop`, required: false, description: `ループするかどうか。trueまたはfalseで指定します。` },
      { name: `sprite_time`, required: false, description: `再生する区間を指定できます。開始時刻と終了時刻をハイフン繋ぎでミリ秒単位で指定します。たとえば6000-10000と指定すると00:06～00:10の4秒間を再生します。loop属性がtrueの場合、この間をループ再生します。 V515以降：00:06-00:10のような分:秒区切りでも指定できるようになりました。必ず:を含めてください。` },
      { name: `time`, required: false, description: `フェードイン時間をミリ秒で指定します。` },
      { name: `volume`, required: false, description: `再生する音量を指定できます。0〜100の範囲で指定して下さい。` },
      { name: `html5`, required: false, description: `通常は指定しなくてOKです。HTML5 Audioを使う場合はtrue、Web Audio APIを使う場合はfalse(デフォルト)で指定します。` },
      { name: `pause`, required: false, description: `trueを指定するとタグ実行時にBGMを再生しません。[resumebgm]で再生できます` },
      { name: `seek`, required: false, description: `再生開始時間を設定できます。例えば4.5と指定すると4.5秒進んだ位置からBGMが再生されます` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[fadeinbgm storage="" loop="" sprite_time="" time="" volume="" html5="" pause="" seek="" cond=""]`
  }],
  [`fadeinse`, {
    name: `fadeinse`,
    description: `効果音をフェードインしながら再生します。`,
    params: [
      { name: `storage`, required: true, description: `再生する音楽ファイルを指定します。` },
      { name: `loop`, required: false, description: `ループするかどうか。trueまたはfalseで指定します。` },
      { name: `sprite_time`, required: false, description: `再生する区間を指定できます。開始時刻と終了時刻をハイフン繋ぎでミリ秒単位で指定します。たとえば6000-10000と指定すると00:06～00:10の4秒間を再生します。loop属性がtrueの場合、この間をループ再生します。 V515以降：00:06-00:10のような分:秒区切りでも指定できるようになりました。必ず:を含めてください。` },
      { name: `buf`, required: false, description: `効果音を停止するスロットを指定できます。` },
      { name: `time`, required: true, description: `フェードイン時間をミリ秒で指定します。` },
      { name: `html5`, required: false, description: `通常は指定しなくてOKです。HTML5 Audioを使う場合はtrue、Web Audio APIを使う場合はfalse(デフォルト)で指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[fadeinse storage="" loop="" sprite_time="" buf="" time="" html5="" cond=""]`
  }],
  [`fadeoutbgm`, {
    name: `fadeoutbgm`,
    description: `再生中のBGMをフェードアウトしながら停止します。`,
    params: [
      { name: `time`, required: false, description: `フェードアウト時間をミリ秒で指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[fadeoutbgm time="" cond=""]`
  }],
  [`fadeoutse`, {
    name: `fadeoutse`,
    description: `効果音をフェードアウトします。`,
    params: [
      { name: `time`, required: false, description: `フェードアウト時間をミリ秒で指定します。` },
      { name: `buf`, required: false, description: `効果音を停止するスロットを指定できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[fadeoutse time="" buf="" cond=""]`
  }],
  [`filter`, {
    name: `filter`,
    description: `レイヤやオブジェクトを指定して、様々なフィルター効果を追加できます。`,
    params: [
      { name: `layer`, required: false, description: `フィルタをかけるレイヤを指定します。省略すると、もしくはallと指定するとゲーム画面全てに効果がかかります。` },
      { name: `name`, required: false, description: `特定の要素にフィルタをかけたい場合に、その要素のnameを指定します。` },
      { name: `grayscale`, required: false, description: `0(デフォルト)～100を指定することで、画像の表示をグレースケールに変換できます。` },
      { name: `sepia`, required: false, description: `0(デフォルト)～100を指定することで、画像の表示をセピア調に変換できます。` },
      { name: `saturate`, required: false, description: `0～100(デフォルト)を指定してあげることで、画像の表示の彩度（色の鮮やかさ）を変更できます。` },
      { name: `hue`, required: false, description: `0(デフォルト)～360を指定することで、画像の表示の色相を変更できます。` },
      { name: `invert`, required: false, description: `0(デフォルト)～100を指定することで、画像の表示の階調を反転させることができます。` },
      { name: `opacity`, required: false, description: `0～100(デフォルト)を指定することで、画像の表示の透過度を変更できます。` },
      { name: `brightness`, required: false, description: `100(デフォルト)を基準とする数値を指定することで、画像の明度を変更できます。0で真っ暗に、100以上の数値でより明るくなります。` },
      { name: `contrast`, required: false, description: `0～100(デフォルト)を指定することで、画像の表示のコントラストを変更できます。` },
      { name: `blur`, required: false, description: `0(デフォルト)～任意の値を指定することで、画像の表示をぼかすことができます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[filter layer="" name="" grayscale="" sepia="" saturate="" hue="" invert="" opacity="" brightness="" contrast="" blur="" cond=""]`
  }],
  [`font`, {
    name: `font`,
    description: `テキストのスタイルを変更します。スタイルはメッセージレイヤごとに個別に設定できます。`,
    params: [
      { name: `size`, required: false, description: `文字サイズを指定します` },
      { name: `color`, required: false, description: `文字色を0xRRGGBB形式で指定します。` },
      { name: `bold`, required: false, description: `太字にするかどうか。trueまたはfalseで指定します。` },
      { name: `italic`, required: false, description: `イタリック体にするかどうか。trueまたはfalseで指定します。` },
      { name: `face`, required: false, description: `フォントの種類を指定します。Webフォントを使用する場合はtyrano/css/font.cssに定義を記述してください。` },
      { name: `edge`, required: false, description: `文字の縁取りを有効にできます。縁取り色を0xRRGGBB形式等で指定します。縁取りを解除する場合はnoneと指定します。 V515以降：縁取りの太さもあわせて指定できます。4px 0xFF0000のように、色の前に縁取りの太さをpx付きで記述します。太さと色は半角スペースで区切ってください。さらに4px 0xFF0000, 2px 0xFFFFFFのようにカンマ区切りで複数の縁取りを指定できます。` },
      { name: `edge_method`, required: false, description: `縁取りの実装方式を選択できます。指定できるキーワードはshadowまたはfilter。` },
      { name: `shadow`, required: false, description: `文字に影をつけます。影の色を0xRRGGBB形式で指定します。影を解除する場合はnoneと指定します。` },
      { name: `effect`, required: false, description: `フォントの表示演出にアニメーションを設定できます。noneを指定すると無効。指定できるキーワードは以下のとおり。fadeInfadeInDownfadeInLeftfadeInRightfadeInUprotateInzoomInslideInbounceInvanishInpuffInrollInnone` },
      { name: `effect_speed`, required: false, description: `effectパラメータがnone以外の場合に、表示されるまでの時間を指定します。デフォルトは0.2sです。sは秒を表します。` },
      { name: `gradient`, required: false, description: `V515以降：文字にグラデーションを適用することができます。CSSグラデーション形式で指定します。CSSグラデーションとは、たとえばlinear-gradient(45deg, red 0%, yellow 100%)のような形式です。 CSSグラデーションを簡単に作れるサイトがWeb上にいくつか存在しますので、「CSS グラデーション ジェネレーター」で検索してみてください。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[font size="" color="" bold="" italic="" face="" edge="" edge_method="" shadow="" effect="" effect_speed="" gradient="" cond=""]`
  }],
  [`frame`, {
    name: `frame`,
    description: `キーフレームをひとつ定義します。[keyframe]と[endkeyframe]の間に記述します。`,
    params: [
      { name: `p`, required: true, description: `キーフレームの位置をパーセンテージ（0%〜100%）で指定します。たとえば50%と指定すれば、全体の長さが4秒のアニメーションのなかの2秒目、となります。0%のキーフレームを省略することで前回のアニメーション状態を継承できます。` },
      { name: `x`, required: false, description: `X軸方向へのアニメーション量をピクセル単位で指定してください。*(アスタリスク)で始めることで、絶対位置として指定できます。 例） x＝"100"(前へ100px移動する)、x="*100"(画面左端から100pxの位置へ移動する)` },
      { name: `y`, required: false, description: `Y軸方向へのアニメーション量をピクセル単位で指定してください。*(アスタリスク)で始めることで、絶対位置として指定できます。` },
      { name: `z`, required: false, description: `Z軸方向へのアニメーション量をピクセル単位で指定してください。*(アスタリスク)で始めることで、絶対位置として指定できます。 このパラメータを使用することで三次元的な表現が可能ですが、対応しているのは一部のブラウザのみとなります。` },
      { name: `rotate`, required: false, description: `対象を回転させることができます。たとえば180度回転させたい場合、180degのように指定します。` },
      { name: `rotateX`, required: false, description: `対象をX軸を軸として回転させることができます。` },
      { name: `rotateY`, required: false, description: `対象をY軸を軸として回転させることができます。` },
      { name: `rotateZ`, required: false, description: `対象をZ軸を軸として回転させることができます。` },
      { name: `scale`, required: false, description: `対象を拡大または縮小できます。2倍に拡大するには2を、半分に縮小するには0.5を指定します。` },
      { name: `scaleX`, required: false, description: `X方向に拡大または縮小できます。` },
      { name: `scaleY`, required: false, description: `Y方向に拡大または縮小できます。` },
      { name: `scaleZ`, required: false, description: `Z方向に拡大または縮小できます。` },
      { name: `skew`, required: false, description: `傾斜を指定できます。` },
      { name: `skewX`, required: false, description: `X傾斜を指定できます。` },
      { name: `skewY`, required: false, description: `Y傾斜を指定できます。` },
      { name: `perspective`, required: false, description: `遠近効果を付与できます。一部ブラウザのみ対応。` },
      { name: `opacity`, required: false, description: `不透明度を0～255の数値で指定します。0で完全に透明になります。 その他: CSSのスタイルを各種指定できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[frame p="" x="" y="" z="" rotate="" rotateX="" rotateY="" rotateZ="" scale="" scaleX="" scaleY="" scaleZ="" skew="" skewX="" skewY="" perspective="" opacity="" その他="" cond=""]`
  }],
  [`free`, {
    name: `free`,
    description: `レイヤに追加されたnameで指定された要素をすべて削除します。name指定は必須です。`,
    params: [
      { name: `layer`, required: true, description: `対象のレイヤを指定します。` },
      { name: `name`, required: true, description: `削除する要素のnameを指定します。レイヤ内のあらゆる要素に適応できます。` },
      { name: `time`, required: false, description: `フェードアウト時間をミリ秒単位で指定します。これを指定すると、画像が徐々に透明になっていきます。省略すると、一瞬で消去されます。` },
      { name: `wait`, required: false, description: `フェードアウトの完了を待つかどうか。trueまたはfalseで指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[free layer="" name="" time="" wait="" cond=""]`
  }],
  [`free_filter`, {
    name: `free_filter`,
    description: `レイヤやオブジェクトを指定して、[filter]効果を無効にします。`,
    params: [
      { name: `layer`, required: false, description: `フィルターを消去するレイヤを指定します。指定がない場合、すべてのフィルターが消去されます。` },
      { name: `name`, required: false, description: `特定の要素のフィルターを消去したい場合に、その要素のnameを指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[free_filter layer="" name="" cond=""]`
  }],
  [`free_layermode`, {
    name: `free_layermode`,
    description: `合成レイヤを消去します。`,
    params: [
      { name: `name`, required: false, description: `消去する合成レイヤのnameを指定します。省略すると、すべての合成レイヤが消去されます。` },
      { name: `time`, required: false, description: `フェードアウト時間をミリ秒で指定します。` },
      { name: `wait`, required: false, description: `フェードアウトの完了を待つかどうか。trueまたはfalseで指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[free_layermode name="" time="" wait="" cond=""]`
  }],
  [`freeimage`, {
    name: `freeimage`,
    description: `指定したレイヤに存在する画像などをすべて削除します。`,
    params: [
      { name: `layer`, required: true, description: `対象のレイヤを指定します。` },
      { name: `page`, required: false, description: `レイヤの表ページと裏ページ、どちらを対象とするか。foreまたはbackで指定します。省略すると、表ページとみなされます。` },
      { name: `time`, required: false, description: `フェードアウト時間をミリ秒単位で指定します。これを指定すると、画像が徐々に透明になっていきます。省略すると、一瞬で消去されます。` },
      { name: `wait`, required: false, description: `フェードアウトの完了を待つかどうか。trueまたはfalseで指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[freeimage layer="" page="" time="" wait="" cond=""]`
  }],
  [`fuki_chara`, {
    name: `fuki_chara`,
    description: `ふきだしのデザインをキャラクターごとに設定できます。`,
    params: [
      { name: `name`, required: true, description: `キャラクター名を指定します。キャラクターがいないときデザインを設定するにはothersを指定します。` },
      { name: `left`, required: false, description: `どの位置にふきだしを表示するかを指定します。（キャラクター画像左端からの相対位置）` },
      { name: `top`, required: false, description: `どの位置にふきだしを表示するかを指定します。（キャラクター画像上端からの相対位置）` },
      { name: `sippo`, required: false, description: `しっぽをどの方向に表示するかを指定します。top(上)、 bottom(下)、left(左)、right(右)` },
      { name: `sippo_left`, required: false, description: `ふきだしの位置がtopかbottomの場合、しっぽを表示する左端からの位置を指定できます。` },
      { name: `sippo_top`, required: false, description: `ふきだしの位置がleftかrightの場合、しっぽを表示する上端からの位置を指定できます。` },
      { name: `sippo_width`, required: false, description: `しっぽの幅を指定できます。` },
      { name: `sippo_height`, required: false, description: `しっぽの高さを指定できます。` },
      { name: `max_width`, required: false, description: `ふきだしのサイズは自動的に調整されますが、その際の横幅の上限サイズを指定できます。` },
      { name: `fix_width`, required: false, description: `これを指定することで、ふきだしの横幅の自動調節機能を停止し、指定した横幅で固定できます。` },
      { name: `color`, required: false, description: `ふきだしの表示色を0xRRGGBB形式で指定します。` },
      { name: `border_color`, required: false, description: `外枠の線の色を0xRRGGBB形式で指定します。border_sizeの指定が同時に必要です。` },
      { name: `border_size`, required: false, description: `外枠の線の太さを指定します。0を指定すると外枠は表示されません。初期値は0。` },
      { name: `opacity`, required: false, description: `ふきだしの不透明度を0～255の数値で指定します。0で完全に透明。（文字の不透明度や、レイヤ自体の不透明度ではありません）` },
      { name: `radius`, required: false, description: `ふきだしの角の丸みを数値で指定します。例：10(控えめな角丸)、30(普通の角丸)、100(巨大な角丸)` },
      { name: `font_color`, required: false, description: `フォントの色を0xRRGGBB形式で指定します。` },
      { name: `font_size`, required: false, description: `フォントサイズを指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[fuki_chara name="" left="" top="" sippo="" sippo_left="" sippo_top="" sippo_width="" sippo_height="" max_width="" fix_width="" color="" border_color="" border_size="" opacity="" radius="" font_color="" font_size="" cond=""]`
  }],
  [`fuki_start`, {
    name: `fuki_start`,
    description: `メッセージレイヤを漫画のふきだし風に表現できます。`,
    params: [
      { name: `layer`, required: false, description: `対象とするメッセージレイヤを指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[fuki_start layer="" cond=""]`
  }],
  [`fuki_stop`, {
    name: `fuki_stop`,
    description: `ふきだし表示を停止します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[fuki_stop cond=""]`
  }],
  [`glink`, {
    name: `glink`,
    description: `グラフィカルリンク(テキストボタン)を表示できます。画像は必要ありません。`,
    params: [
      { name: `color`, required: false, description: `ボタンの色をキーワードで指定できます。デフォルトはblackです。blackgraywhiteorangeredbluerosygreenpinkのキーワードが指定できます。 V501c以降では200パターン以上のデザインが追加されました。詳しくは https://tyrano.jp/sample2/code/siryou/1 をご覧ください。` },
      { name: `font_color`, required: false, description: `フォントの色を0xRRGGBB形式で指定します。` },
      { name: `storage`, required: false, description: `ジャンプ先のシナリオファイル名を指定します。省略すると、現在のシナリオファイルとみなされます。` },
      { name: `target`, required: false, description: `ジャンプ先のラベル名を指定します。省略すると、シナリオファイルの先頭にジャンプします。` },
      { name: `name`, required: false, description: `[anim]タグなどからこの名前でアニメーションさせられます。カンマで区切ることで複数指定できます。（高度な知識：name属性で指定した値はHTMLのクラス属性になります）` },
      { name: `text`, required: false, description: `テキストの内容を指定します。` },
      { name: `x`, required: false, description: `ボタンの横位置を指定します。` },
      { name: `y`, required: false, description: `ボタンの縦位置を指定します。` },
      { name: `width`, required: false, description: `ボタンの横幅をピクセルで指定できます。` },
      { name: `height`, required: false, description: `ボタンの高さをピクセルで指定できます。` },
      { name: `size`, required: false, description: `フォントサイズを指定できます。` },
      { name: `face`, required: false, description: `フォントを指定できます。Webフォントを使用する場合はtyrano/css/font.cssに定義を記述してください。` },
      { name: `graphic`, required: false, description: `ボタンの背景画像を指定します。ファイルはdata/imageフォルダに入れてください。画像が指定された場合はcolorは無視されます。` },
      { name: `enterimg`, required: false, description: `graphicが指定されている時に有効。カーソルが重なった時の画像を指定できます` },
      { name: `clickse`, required: false, description: `ボタンをクリックした時に再生される効果音を設定できます。効果音ファイルはdata/soundフォルダに配置してください` },
      { name: `enterse`, required: false, description: `ボタンの上にマウスカーソルが乗った時に再生する効果音を設定できます。効果音ファイルはsoundフォルダに配置してください` },
      { name: `leavese`, required: false, description: `ボタンの上からマウスカーソルが外れた時に再生する効果音を設定できます。効果音ファイルはsoundフォルダに配置してください。` },
      { name: `cm`, required: false, description: `ボタンクリック後に[cm]を実行するかどうか。[glink]は通常、ボタンクリック後に自動的に[cm]が実行されますが、falseを指定するとこの[cm]を実行しません。 プレイヤー入力などの決定を[glink]で行いたい場合はfalseを指定しておき、[commit]後に手動で[cm]を実行してボタンや入力ボックスを消してください。` },
      { name: `exp`, required: false, description: `ボタンがクリックされた時に実行されるJSを指定できます。` },
      { name: `preexp`, required: false, description: `タグが実行された時点で、この属性に指定した値が変数preexpに格納されます。そしてボタンがクリックされた時にexp内でpreexpという変数が利用できるようになります。` },
      { name: `bold`, required: false, description: `太字にする場合はtrueを指定します。` },
      { name: `opacity`, required: false, description: `領域の不透明度を0～255の数値で指定します。0で完全に透明です。` },
      { name: `edge`, required: false, description: `文字の縁取りを有効にできます。縁取り色を0xRRGGBB形式等で指定します。 V515以降：縁取りの太さもあわせて指定できます。4px 0xFF0000のように、色の前に縁取りの太さをpx付きで記述します。太さと色は半角スペースで区切ってください。さらに4px 0xFF0000, 2px 0xFFFFFFのようにカンマ区切りで複数の縁取りを指定できます。` },
      { name: `shadow`, required: false, description: `文字に影をつけます。影の色を0xRRGGBB形式で指定します。` },
      { name: `keyfocus`, required: false, description: `falseを指定すると、キーボードやゲームパッドで選択できなくなります。また1や2などの数値を指定すると、キーコンフィグのfocus_nextアクションでボタンを選択していくときの順序を指定できます。` },
      { name: `autopos`, required: false, description: `trueかfalseを指定します。デフォルトはfalse。trueを指定するとボタンの位置を自動的に調整します。つまりxとyに何も指定しなかったと同じ動作になります` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[glink color="" font_color="" storage="" target="" name="" text="" x="" y="" width="" height="" size="" face="" graphic="" enterimg="" clickse="" enterse="" leavese="" cm="" exp="" preexp="" bold="" opacity="" edge="" shadow="" keyfocus="" autopos="" cond=""]`
  }],
  [`glink_config`, {
    name: `glink_config`,
    description: `V515以降で使用可能。`,
    params: [
      { name: `auto_place`, required: false, description: `[glink]の自動配置を有効にするかどうか。trueを指定すると、xとyが指定されていない[glink]を対象とする自動配置を有効にします。falseで無効。` },
      { name: `auto_place_force`, required: false, description: `trueを指定すると、xとyが指定されている[glink]も強制的に自動配置の対象にします。` },
      { name: `margin_x`, required: false, description: `ボタンの外側に付ける横余白を数値(px)で指定します。` },
      { name: `margin_y`, required: false, description: `ボタンの外側に付ける縦余白を数値(px)で指定します。` },
      { name: `padding_x`, required: false, description: `ボタンの内側に付ける横余白を数値(px)で指定します。defaultを指定すると調整を行いません。` },
      { name: `padding_y`, required: false, description: `ボタンの内側に付ける縦余白を数値(px)で指定します。defaultを指定すると調整を行いません。` },
      { name: `width`, required: false, description: `maxと指定すると、ボタンの横幅を『一番横幅の大きいボタンの横幅』に揃えることができます。数値を直接指定することで共通の横幅を指定することもできます。defaultを指定すると調整を行いません。` },
      { name: `height`, required: false, description: `maxと指定すると、ボタンの高さを『一番横幅の大きいボタンの高さ』に揃えることができます。数値を直接指定することで共通の高さを指定することもできます。defaultを指定すると調整を行いません。` },
      { name: `vertical`, required: false, description: `ボタンの縦方向の揃え方をtop(上揃え)、center(中央揃え)、bottom(下揃え)のいずれかで指定します。` },
      { name: `horizontal`, required: false, description: `ボタンの横方向の揃え方をleft(左揃え)、center(中央揃え)、right(右揃え)のいずれかで指定します。` },
      { name: `wrap`, required: false, description: `wrapを指定すると、ボタンが収まりきらないときの折り返しが有効になります。` },
      { name: `place_area`, required: false, description: `揃え方の基準となる領域の位置や大きさを指定できます。auto(デフォルト)を指定すると、メッセージウィンドウ考慮して自動で領域を調整します。coverだと画面全体を基準にします。領域の位置とサイズを直接指定したい場合は100,100,1000,1000のようにカンマ区切りで数値を4つ指定してください。そうすると、順にleft, top, width, heightとして解釈されます。` },
      { name: `show_time`, required: false, description: `表示アニメーションにかける時間をミリ秒単位で指定します。0を指定するとアニメーションを行いません。なお、アニメーション中はクリックすることができません。` },
      { name: `show_effect`, required: false, description: `表示アニメーションのエフェクトを以下のキーワードから指定できます。 fadeInfadeInDownfadeInLeftfadeInRightfadeInUplightSpeedInrotateInrotateInDownLeftrotateInDownRightrotateInUpLeftrotateInUpRightzoomInzoomInDownzoomInLeftzoomInRightzoomInUpbounceInbounceInDownbounceInLeftbounceInRightbounceInUprollInvanishInpuffIn` },
      { name: `show_keyframe`, required: false, description: `表示アニメーションとして[keyframe]タグで定義したキーフレームアニメーションのnameを指定できます。これを指定した場合、show_effectは無視されます。` },
      { name: `show_delay`, required: false, description: `各ボタンを表示していく際の遅延をミリ秒で指定できます。0だとすべてのボタンが同時に表示され、たとえば100と指定すると100ミリ秒ごとに1個ずつボタンが表示されます。` },
      { name: `show_easing`, required: false, description: `表示アニメーションの変化パターンを指定できます。以下のキーワードが指定できます。デフォルトはlinear。 ease(開始時点と終了時点を滑らかに再生する) linear(一定の間隔で再生する) ease-in(開始時点をゆっくり再生する) ease-out(終了時点をゆっくり再生する) ease-in-out(開始時点と終了時点をゆっくり再生する) この他にcubic-bezier関数を使って独自のイージングを指定することも可能です。` },
      { name: `select_time`, required: false, description: `ボタンが選択されたときの退場アニメーションにかける時間をミリ秒単位で指定します。0を指定するとアニメーションを行いません。` },
      { name: `select_effect`, required: false, description: `選択時の退場アニメーションのエフェクトを以下のキーワードが指定できます。 fadeOutfadeOutDownBigfadeOutLeftBigfadeOutRightBigfadeOutUpBigflipOutXflipOutYlightSpeedOutrotateOutrotateOutDownLeftrotateOutDownRightrotateOutUpLeftrotateOutUpRightzoomOutzoomOutDownzoomOutLeftzoomOutRightzoomOutUpslideOutDownslideOutLeftslideOutRightslideOutUpbounceOut bounceOutDownbounceOutLeftbounceOutRightbounceOutUp` },
      { name: `select_keyframe`, required: false, description: `選択時の退場アニメーションとして[keyframe]タグで定義したキーフレームアニメーションのnameを指定できます。これを指定した場合、select_effectは無視されます。` },
      { name: `select_delay`, required: false, description: `選択時の退場アニメーションを開始するまでの遅延をミリ秒単位で指定します。` },
      { name: `select_easing`, required: false, description: `選択時の退場アニメ―ションのイージングを指定します。` },
      { name: `reject_time`, required: false, description: `ボタンが選択されなかったときの退場アニメーションにかける時間をミリ秒単位で指定します。0を指定するとアニメーションを行いません。` },
      { name: `reject_effect`, required: false, description: `非選択時の退場アニメーションのエフェクトを以下のキーワードが指定できます。 fadeOutfadeOutDownBigfadeOutLeftBigfadeOutRightBigfadeOutUpBigflipOutXflipOutYlightSpeedOutrotateOutrotateOutDownLeftrotateOutDownRightrotateOutUpLeftrotateOutUpRightzoomOutzoomOutDownzoomOutLeftzoomOutRightzoomOutUpslideOutDownslideOutLeftslideOutRightslideOutUpbounceOut bounceOutDownbounceOutLeftbounceOutRightbounceOutUp` },
      { name: `reject_keyframe`, required: false, description: `非選択時の退場アニメーションとして[keyframe]タグで定義したキーフレームアニメーションのnameを指定できます。これを指定した場合、reject_effectは無視されます。` },
      { name: `reject_delay`, required: false, description: `選択時の退場アニメーションを開始するまでの遅延をミリ秒単位で指定します。` },
      { name: `reject_easing`, required: false, description: `選択時の退場アニメ―ションのイージングを指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[glink_config auto_place="" auto_place_force="" margin_x="" margin_y="" padding_x="" padding_y="" width="" height="" vertical="" horizontal="" wrap="" place_area="" show_time="" show_effect="" show_keyframe="" show_delay="" show_easing="" select_time="" select_effect="" select_keyframe="" select_delay="" select_easing="" reject_time="" reject_effect="" reject_keyframe="" reject_delay="" reject_easing="" cond=""]`
  }],
  [`glyph`, {
    name: `glyph`,
    description: `クリック待ちグリフ（[l]や[p]でクリックを待つ状態のときにメッセージの末尾に表示される画像）の設定が変更できます。使用する画像を変更したり、位置をメッセージの最後ではなく画面上の固定位置に出すようにしたりできます。`,
    params: [
      { name: `line`, required: false, description: `グリフに使用する画像を指定できます。画像ファイルは、デフォルトではtyrano/images/systemフォルダ（nextpage.gifがあるフォルダ）から探されます。folderパラメータで変更可。` },
      { name: `fix`, required: false, description: `trueを指定すると、グリフがメッセージの末尾ではなくゲーム画面上の固定位置に表示されます。` },
      { name: `left`, required: false, description: `グリフを表示する横の位置を指定します。（fix属性をtrueにした場合に有効）` },
      { name: `top`, required: false, description: `グリフを表示する縦の位置を指定します。（fix属性をtrueにした場合に有効）` },
      { name: `folder`, required: false, description: `グリフの画像を探すフォルダを指定できます。` },
      { name: `width`, required: false, description: `グリフの横幅をpx単位で指定できます。` },
      { name: `height`, required: false, description: `グリフの高さをpx単位で指定できます。` },
      { name: `marginl`, required: false, description: `グリフの左側の余白をpx単位で指定できます。` },
      { name: `marginb`, required: false, description: `グリフの下側の余白をpx単位で指定できます。` },
      { name: `anim`, required: false, description: `グリフに適用するアニメーションを以下のキーワードから指定できます。 flash_momentary(瞬間的な点滅) flash(滑らかな点滅) spin_x(X軸を中心に回転) spin_y(Y軸を中心に回転) spin_z(Z軸を中心に回転) bounce(バウンド) rotate_bounce(回転しながらバウンド) soft_bounce(ぽよんと弾むバウンド) zoom(拡縮)` },
      { name: `time`, required: false, description: `グリフに適用するアニメーションの時間をミリ秒単位で指定します。` },
      { name: `figure`, required: false, description: `グリフに使用する図形を以下のキーワードから指定できます。 circle(円) triangle(三角形) v_triangle(下向き三角形) rectangle(四角形) diamond(ひし形) start(星)` },
      { name: `color`, required: false, description: `グリフに図形を使用する場合に、図形の色を指定できます。` },
      { name: `name`, required: false, description: `グリフに付けるクラス名を指定できます。（上級者向け）` },
      { name: `html`, required: false, description: `グリフのコンテンツとしてHTMLを直接指定できます。（上級者向け）` },
      { name: `keyframe`, required: false, description: `適用するキーフレームアニメーションのnameを指定します。animと併用することはできません。` },
      { name: `easing`, required: false, description: `アニメーションの変化パターンを指定できます。以下のキーワードが指定できます。 ease(開始時点と終了時点を滑らかに再生する) linear(一定の間隔で再生する) ease-in(開始時点をゆっくり再生する) ease-out(終了時点をゆっくり再生する) ease-in-out(開始時点と終了時点をゆっくり再生する) この他にcubic-bezier関数を使って独自のイージングを指定することも可能です。` },
      { name: `count`, required: false, description: `再生回数を指定できます。infiniteを指定することで無限ループさせることもできます。` },
      { name: `delay`, required: false, description: `開始までの時間を指定できます。初期値は0、つまり遅延なしです。` },
      { name: `direction`, required: false, description: `アニメーションを複数回ループさせる場合に、偶数回目のアニメーションを逆再生にするかを設定できます。偶数回目を逆再生にする場合はalternateを指定します。` },
      { name: `mode`, required: false, description: `アニメーションの最後のフレームの状態（位置、回転など）をアニメーション終了後も維持するかを設定できます。forwards(デフォルト)で維持。noneを指定すると、アニメーション再生前の状態に戻ります。` },
      { name: `koma_anim`, required: false, description: `グリフに使用するコマアニメの画像を指定できます。コマアニメに使用する画像は「すべてのコマが横並びで連結されたひとつの画像ファイル」である必要があります。` },
      { name: `koma_count`, required: false, description: `コマアニメを使用する場合、画像に含まれるコマ数を指定します。これを指定した場合、koma_widthを省略できます。` },
      { name: `koma_width`, required: false, description: `コマアニメを使用する場合、1コマあたりの横幅をpx単位で指定します。これを指定した場合、koma_countを省略できます。` },
      { name: `koma_anim_time`, required: false, description: `コマアニメが1周するまでの時間をミリ秒単位で指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[glyph line="" fix="" left="" top="" folder="" width="" height="" marginl="" marginb="" anim="" time="" figure="" color="" name="" html="" keyframe="" easing="" count="" delay="" direction="" mode="" koma_anim="" koma_count="" koma_width="" koma_anim_time="" cond=""]`
  }],
  [`glyph_auto`, {
    name: `glyph_auto`,
    description: `オートモード中に表示されるグリフを設定できます。`,
    params: [
      { name: `fix`, required: false, description: `画面固定グリフの設定をするならtrue、メッセージ末尾のグリフの設定をするならfalseを指定します。オートモードグリフに限り、固定グリフと非固定グリフを両方設定できます。` },
      { name: `use`, required: false, description: `すでに画面上に出ている要素を画面固定グリフとして扱うようにできます。[ptext]や[image]に設定したnameをここに指定します。` },
      { name: `delete`, required: false, description: `trueを指定した場合、グリフの定義を削除する処理を実行します。 その他: [glyph]と同じパラメータが指定できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[glyph_auto fix="" use="" delete="" その他="" cond=""]`
  }],
  [`glyph_skip`, {
    name: `glyph_skip`,
    description: `スキップモード中に表示されるグリフを設定できます。`,
    params: [
      { name: `use`, required: false, description: `すでに画面上に出ている要素をスキップモード中のグリフとして扱うようにできます。[ptext]や[image]に設定したnameをここに指定します。` },
      { name: `delete`, required: false, description: `trueを指定した場合、グリフの定義を削除する処理を実行します。 その他: [glyph]と同じパラメータが指定できます。ただしfixパラメータはtrueで固定されます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[glyph_skip use="" delete="" その他="" cond=""]`
  }],
  [`graph`, {
    name: `graph`,
    description: `任意の画像をメッセージ中に表示します。絵文字や特殊文字などに活用できます。
表示する画像はdata/imageフォルダに配置してください。
よく使う記号についてはマクロを組んでおくと楽です。`,
    params: [
      { name: `storage`, required: true, description: `表示する画像ファイル名を指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[graph storage="" cond=""]`
  }],
  [`hidemenubutton`, {
    name: `hidemenubutton`,
    description: `メニューボタンを非表示にします。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[hidemenubutton cond=""]`
  }],
  [`hidemessage`, {
    name: `hidemessage`,
    description: `メッセージレイヤを一時的に隠してクリックを待ちます。テキストは消去されません。メニューから「メッセージを消す」を選んだのと同じ動作を行います。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[hidemessage cond=""]`
  }],
  [`html`, {
    name: `html`,
    description: `[html]と[endhtml]の間に記述したHTMLを表示できます。このHTMLは最前面に表示されます。`,
    params: [
      { name: `left`, required: false, description: `HTMLの左端位置を指定します。（ピクセル）` },
      { name: `top`, required: false, description: `HTMLの上端位置を指定します。（ピクセル）` },
      { name: `name`, required: false, description: `HTML領域に名前を指定できます。この名前を使って、HTML領域に対してアニメーションを実行することができます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[html left="" top="" name="" cond=""]`
  }],
  [`if`, {
    name: `if`,
    description: `条件分岐を行います。`,
    params: [
      { name: `exp`, required: true, description: `評価するJavaScriptの式を指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[if exp="" cond=""]`
  }],
  [`ignore`, {
    name: `ignore`,
    description: `expに指定されたJavaScriptの式を評価します。その結果がtrue(真)ならば、[ignore]と[endignore]で囲まれた文章やタグが無視されます。`,
    params: [
      { name: `exp`, required: true, description: `評価するJavaScriptの式を指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[ignore exp="" cond=""]`
  }],
  [`image`, {
    name: `image`,
    description: `指定したレイヤに画像を追加します。キャラクター表示や背景切り替えなどに使用できます。`,
    params: [
      { name: `storage`, required: false, description: `画像ファイル名を指定します。ファイルは背景レイヤならdata/bgimage、前景レイヤならdata/fgimageに入れてください。` },
      { name: `layer`, required: false, description: `画像を追加するレイヤを指定します。 baseを指定すると背景レイヤ。0以上の整数を指定すると対応する前景レイヤに画像を表示します。` },
      { name: `page`, required: false, description: `レイヤの表ページと裏ページ、どちらを対象とするか。foreまたはbackで指定します。省略すると、表ページとみなされます。` },
      { name: `visible`, required: false, description: `trueまたはfalseを指定します。trueを指定すると、画像を追加すると同時に対象レイヤを表示状態にします。つまり、[layopt visible="true"]を省略できます。` },
      { name: `left`, required: false, description: `画像の左端位置を指定します。（ピクセル）` },
      { name: `top`, required: false, description: `画像の上端位置を指定します。（ピクセル）` },
      { name: `x`, required: false, description: `画像の左端位置を指定します。leftと同様。こちらが優先度高。（ピクセル）` },
      { name: `y`, required: false, description: `画像の上端位置を指定します。topと同様。こちらが優先度高。（ピクセル）` },
      { name: `width`, required: false, description: `画像の横幅を指定します。（ピクセル）` },
      { name: `height`, required: false, description: `画像の高さを指定します。（ピクセル）` },
      { name: `folder`, required: false, description: `画像が入っているフォルダを指定できます。デフォルトでは前景レイヤ用の画像はfgimageフォルダ、背景レイヤ用の画像はbgimageフォルダと決まっていますが、これを変更できます。` },
      { name: `name`, required: false, description: `[anim]タグなどからこの名前でアニメーションさせられます。カンマで区切ることで複数指定できます。（高度な知識：name属性で指定した値はHTMLのクラス属性になります）` },
      { name: `time`, required: false, description: `フェードイン時間をミリ秒単位で指定します。これを指定すると、画像が透明な状態から徐々に表示されていきます。省略すると、一瞬で表示されます。` },
      { name: `wait`, required: false, description: `フェードインの完了を待つかどうか。trueまたはfalseで指定します。` },
      { name: `zindex`, required: false, description: `画像同士の重なりを指定できます。数値が大きい方が前に表示されます。` },
      { name: `depth`, required: false, description: `zindexが同一な場合の重なりを指定できます。front(最前面)またはback(最後面)で指定します。デフォルトはfront。` },
      { name: `reflect`, required: false, description: `trueを指定すると左右反転します。` },
      { name: `pos`, required: false, description: `画像の位置をキーワードで決定します。 指定できるキーワードはleft(左端)、left_center(左寄り)、center(中央)、right_center(右寄り)、right(右端)。各キーワードに対応する実際の座標はConfig.tjsで設定されており、自由に編集できます。 各キーワードにはそれぞれ省略形があり、l、lc、c、rc、rと指定することもできます。動作は同じです。 この属性を指定した場合はleftパラメータは無視されます。 layerをbaseと指定した場合、この属性は指定しないでください。` },
      { name: `animimg`, required: false, description: `trueを指定すると、GIFまたはAPNG形式のアニメーション画像を最初から再生できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[image storage="" layer="" page="" visible="" left="" top="" x="" y="" width="" height="" folder="" name="" time="" wait="" zindex="" depth="" reflect="" pos="" animimg="" cond=""]`
  }],
  [`iscript`, {
    name: `iscript`,
    description: `[iscript]と[endscript]に囲まれた箇所にJavaScriptの文を記述できます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[iscript cond=""]`
  }],
  [`jump`, {
    name: `jump`,
    description: `指定シナリオファイルの指定ラベルに移動します。`,
    params: [
      { name: `storage`, required: false, description: `ジャンプ先のシナリオファイル名を指定します。省略すると、現在のシナリオファイルとみなされます。` },
      { name: `target`, required: false, description: `ジャンプ先のラベル名を指定します。省略すると、シナリオファイルの先頭にジャンプします。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[jump storage="" target="" cond=""]`
  }],
  [`kanim`, {
    name: `kanim`,
    description: `キーフレームアニメーションを実行します。事前に[keyframe]タグでキーフレームアニメーションを定義しておく必要があります。`,
    params: [
      { name: `name`, required: false, description: `アニメーションさせる画像やテキストのnameを指定します。` },
      { name: `layer`, required: false, description: `nameを指定せずにlayerを指定することで、そのレイヤに存在するすべての要素をアニメーションさせることができます。` },
      { name: `keyframe`, required: true, description: `適用するキーフレームアニメーションのnameを指定します。` },
      { name: `time`, required: false, description: `アニメーション時間をミリ秒で指定します。` },
      { name: `easing`, required: false, description: `アニメーションの変化パターンを指定できます。以下のキーワードが指定できます。 ease(開始時点と終了時点を滑らかに再生する) linear(一定の間隔で再生する) ease-in(開始時点をゆっくり再生する) ease-out(終了時点をゆっくり再生する) ease-in-out(開始時点と終了時点をゆっくり再生する) この他にcubic-bezier関数を使って独自のイージングを指定することも可能です。` },
      { name: `count`, required: false, description: `再生回数を指定できます。infiniteを指定することで無限ループさせることもできます。` },
      { name: `delay`, required: false, description: `開始までの時間を指定できます。初期値は0、つまり遅延なしです。` },
      { name: `direction`, required: false, description: `アニメーションを複数回ループさせる場合に、偶数回目のアニメーションを逆再生にするかを設定できます。偶数回目を逆再生にする場合はalternateを指定します。` },
      { name: `mode`, required: false, description: `アニメーションの最後のフレームの状態（位置、回転など）をアニメーション終了後も維持するかを設定できます。forwards(デフォルト)で維持。noneを指定すると、アニメーション再生前の状態に戻ります。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[kanim name="" layer="" keyframe="" time="" easing="" count="" delay="" direction="" mode="" cond=""]`
  }],
  [`keyframe`, {
    name: `keyframe`,
    description: `キーフレームアニメーションの定義を開始します。`,
    params: [
      { name: `name`, required: true, description: `キーブレームアニメーションの名前を指定します。[kanim]タグで使用します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[keyframe name="" cond=""]`
  }],
  [`l`, {
    name: `l`,
    description: `このタグの位置でプレイヤーのクリックを待ちます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[l cond=""]`
  }],
  [`lang_set`, {
    name: `lang_set`,
    description: `ゲームで使用する言語を変更することができます。
例えば[lang_set name="en"] を指定すると data/others/lang/en.json の翻訳設定が採用されます。`,
    params: [
      { name: `name`, required: true, description: `defaultを指定するとローカライズを行いません。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[lang_set name="" cond=""]`
  }],
  [`layermode`, {
    name: `layermode`,
    description: `ゲーム画面上に画像を合成できます。乗算、スクリーン、オーバーレイなどの合成方法を選べます。`,
    params: [
      { name: `name`, required: false, description: `合成する画像につける名前を指定します。ここで指定した名前は[free_layremovde]で特定の合成のみを消したい際に使用します。` },
      { name: `graphic`, required: false, description: `合成する画像ファイルを指定します。ファイルはimageフォルダに配置します。` },
      { name: `color`, required: false, description: `画像を使わず単色を合成することもできます。その場合、このパラメータに合成色を0xRRGGBB形式で指定します。` },
      { name: `mode`, required: false, description: `合成方法を指定できます。以下のキーワードが指定できます。 multiply(乗算) screen(スクリーン) overlay(オーバーレイ) darken(暗く) lighten(明るく) color-dodge(覆い焼きカラー) color-burn(焼き込みカラー) hard-light(ハードライト) soft-light(ソフトライト) difference(差の絶対値) exclusion(除外) hue(色相) saturation(彩度) color(カラー) luminosity(輝度)` },
      { name: `folder`, required: false, description: `graphicで指定する画像のフォルダを変更できます。たとえばbgimageと指定するとbgimageから画像を取得します。` },
      { name: `opacity`, required: false, description: `不透明度を0～255の数値で指定します。0で完全に透明になります。` },
      { name: `time`, required: false, description: `フェードイン時間をミリ秒単位で指定します。これを指定すると、画像が透明な状態から徐々に表示されていきます。省略すると、一瞬で表示されます。` },
      { name: `wait`, required: false, description: `フェードインの完了を待つかどうか。trueまたはfalseで指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[layermode name="" graphic="" color="" mode="" folder="" opacity="" time="" wait="" cond=""]`
  }],
  [`layermode_movie`, {
    name: `layermode_movie`,
    description: `ゲーム画面上に動画レイヤを合成できます。IEなど一部の古いブラウザでは動作しないため、ブラウザゲームとして公開する場合は注意してください。`,
    params: [
      { name: `name`, required: false, description: `合成するレイヤに名前をつけることができます。この名前は[free_layremovde]タグで特定の合成レイヤのみを消したい場合に使用します。` },
      { name: `video`, required: true, description: `合成する動画ファイルを指定します。ファイルはdata/videoフォルダに配置します。` },
      { name: `volume`, required: false, description: `合成する動画の音量を0〜100で指定します。` },
      { name: `mute`, required: false, description: `動画の音をミュートするかどうか。trueまたはfalseで指定します。ブラウザ上では動画を再生する前にユーザアクション（タップなど）が必要という制限がありますが、trueを指定することでこの制限を無視できます。` },
      { name: `loop`, required: false, description: `動画をループするかどうか。trueまたはfalseで指定します。デフォルトはtrue。ループ指定した場合、[free_layermode]を行うまで演出が残ります。` },
      { name: `speed`, required: false, description: `動画の再生スピードを指定できます。2を指定すると2倍速、0.5を指定すると半分の速度で再生されます。` },
      { name: `mode`, required: false, description: `合成方法を指定できます。デフォルトは「multiply」 次の効果が使えます→ multiply（乗算）screen（スクリーン）overlay（オーバーレイ）darken（暗く）lighten（明るく）color-dodge（覆い焼きカラー）color-burn（焼き込みカラー）hard-light（ハードライト）soft-light（ソフトライト）difference（差の絶対値）exclusion（除外）hue（色相）saturation（彩度）color（カラー）luminosity（輝度）` },
      { name: `opacity`, required: false, description: `不透明度を0～255の数値で指定します。0で完全に透明になります。` },
      { name: `time`, required: false, description: `フェードイン時間をミリ秒単位で指定します。` },
      { name: `left`, required: false, description: `合成レイヤの位置を指定できます。（ピクセル）` },
      { name: `top`, required: false, description: `合成レイヤの位置を指定できます。（ピクセル）` },
      { name: `width`, required: false, description: `合成レイヤの横幅を指定します。（ピクセル）` },
      { name: `height`, required: false, description: `合成レイヤの高さを指定します。（ピクセル）` },
      { name: `fit`, required: false, description: `合成レイヤをゲーム画面いっぱいに引き伸ばすかどうか。trueまたはfalseで指定します。` },
      { name: `wait`, required: false, description: `合成した動画の再生完了を待つかどうか。trueまたはfalseで指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[layermode_movie name="" video="" volume="" mute="" loop="" speed="" mode="" opacity="" time="" left="" top="" width="" height="" fit="" wait="" cond=""]`
  }],
  [`layopt`, {
    name: `layopt`,
    description: `レイヤの属性を指定します。`,
    params: [
      { name: `layer`, required: true, description: `対象となる前景レイヤまたはメッセージレイヤを指定します。messageとのみ指定した場合は、[current]タグで指定した現在の操作対象のメッセージレイヤが対象となります。` },
      { name: `page`, required: false, description: `対象レイヤの表ページと裏ページのどちらを対象とするか。foreかbackで指定します。ただしlayer属性にmessageとのみ指定し、さらにこの属性を省略した場合には、現在操作対象のページが選択されます。` },
      { name: `visible`, required: false, description: `layer属性で指定したレイヤを表示するかどうか。trueを指定するとレイヤは表示状態に、falseを指定すると非表示状態になります。省略すると、表示状態は変更されません。` },
      { name: `left`, required: false, description: `layer属性で指定したレイヤの左端位置を指定します。省略すると位置は変更されません。（メッセージウィンドウの位置やデザインを調整したい場合はこのタグの代わりに[position]タグを使用します）` },
      { name: `top`, required: false, description: `layer属性で指定したレイヤの上端位置を指定します。省略すると位置は変更されません。（メッセージウィンドウの位置やデザインを調整したい場合はこのタグの代わりに[position]タグを使用します）` },
      { name: `opacity`, required: false, description: `レイヤの不透明度を0～255の範囲で指定します。0で完全に透明、255で完全に不透明。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[layopt layer="" page="" visible="" left="" top="" opacity="" cond=""]`
  }],
  [`link`, {
    name: `link`,
    description: `[link]タグと[endlink]タグで囲まれた部分のテキストをリンク化します。選択肢の表示として使用可能。`,
    params: [
      { name: `storage`, required: false, description: `ジャンプ先のシナリオファイル名を指定します。省略すると、現在のシナリオファイルとみなされます。` },
      { name: `target`, required: false, description: `ジャンプ先のラベル名を指定します。省略すると、シナリオファイルの先頭にジャンプします。` },
      { name: `keyfocus`, required: false, description: `falseを指定すると、キーボードやゲームパッドで選択できなくなります。また1や2などの数値を指定すると、キーコンフィグのfocus_nextアクションでボタンを選択していくときの順序を指定できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[link storage="" target="" keyfocus="" cond=""]`
  }],
  [`loadcss`, {
    name: `loadcss`,
    description: `ゲームの途中でCSSを読み込むことができます。`,
    params: [
      { name: `file`, required: true, description: `読み込むCSSファイルのパスを指定します。パスはdata/から記述します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[loadcss file="" cond=""]`
  }],
  [`loading_log`, {
    name: `loading_log`,
    description: `素材の読み込みを行っているときやセーブ処理が走っているときなど、ゲームが一時的に止まっているタイミングで画面端に「Loading...」のようなログを出すことができます。`,
    params: [
      { name: `preload`, required: false, description: `素材の読み込み中に表示するテキストを自由に設定できます。noneを指定するとログを無効にできます。defaultを指定するとデフォルトのログになります。notextを指定するとテキストなしでローディングアイコンだけを出すことができます。` },
      { name: `save`, required: false, description: `セーブ処理中に表示するテキストを自由に設定できます。preload パラメータと同様に、none、default、notextというキーワードが指定可能。` },
      { name: `all`, required: false, description: `preload、save パラメータをまとめて指定できます。たとえば、all="default"とすればすべてのログにデフォルトのテキストを設定できます。` },
      { name: `dottime`, required: false, description: `テキストの後ろに「...」というドットが増えていくアニメーションの所要時間をミリ秒で指定できます。0を指定するとドットアニメーションを無くすことができます。` },
      { name: `icon`, required: false, description: `ローディングアイコンを表示するかどうかをtrueまたはfalseで指定します。ローディングアイコンを非表示にしてテキストのみにしたい場合にはfalseを指定してください。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[loading_log preload="" save="" all="" dottime="" icon="" cond=""]`
  }],
  [`loadjs`, {
    name: `loadjs`,
    description: `外部JavaScriptファイルをロードします。無制限な機能拡張が可能です。
JavaScriptファイルはdata/othersフォルダに配置してください。`,
    params: [
      { name: `storage`, required: true, description: `ロードするJavaScriptファイルを指定します。` },
      { name: `type`, required: false, description: `読み込み方式。moduleを指定することができます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[loadjs storage="" type="" cond=""]`
  }],
  [`locate`, {
    name: `locate`,
    description: `グラフィックボタンの表示位置を指定します。
テキストには対応していません。`,
    params: [
      { name: `x`, required: false, description: `横方向の位置を指定します。（ピクセル）` },
      { name: `y`, required: false, description: `縦方向の位置を指定します。（ピクセル）` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[locate x="" y="" cond=""]`
  }],
  [`macro`, {
    name: `macro`,
    description: `マクロ記述を開始します。自分で新しいタグを定義することが出来ます。`,
    params: [
      { name: `name`, required: true, description: `マクロの名前を指定します。以後、この名前をタグのように記述することで、マクロを呼び出せるようになります。 ★重要 ティラノスクリプトにすでに使用されているタグ名は使わないでください。またtextやlabelも使えません。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[macro name="" cond=""]`
  }],
  [`mark`, {
    name: `mark`,
    description: `テキストに蛍光ペンでマーカーを引いたような効果をつけることができます。
色やサイズも指定可能。`,
    params: [
      { name: `color`, required: false, description: `マーカーの色を0xRRGGBB形式で指定します。デフォルトは黄色。` },
      { name: `font_color`, required: false, description: `マーカーを引いたときのフォントの色を0xRRGGBB形式で指定します。省略すると、ゲーム中のフォント色を継承します。` },
      { name: `size`, required: false, description: `マーカーのサイズを0〜100で指定します。たとえば50だとテキストの下半分にマーカーが引かれます。10だとただの下線に近くなります。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[mark color="" font_color="" size="" cond=""]`
  }],
  [`mask`, {
    name: `mask`,
    description: `ゲーム画面全体を豊富な効果とともに暗転させることができます。
暗転中にゲーム画面を再構築して[mask_off]タグでゲームを再開する使い方ができます。`,
    params: [
      { name: `time`, required: false, description: `暗転が完了するまでの時間をミリ秒で指定できます。` },
      { name: `effect`, required: false, description: `暗転の効果を指定できます。以下のキーワードが指定できます。 fadeInfadeInDownBigfadeInLeftBigfadeInRightBigfadeInUpBigflipInXflipInYlightSpeedInrotateInrotateInDownLeftrotateInDownRightrotateInUpLeftrotateInUpRightzoomInzoomInDownzoomInLeftzoomInRightzoomInUpslideInDownslideInLeftslideInRightslideInUpbounceIn bounceInDownbounceInLeftbounceInRightbounceInUprollIn` },
      { name: `color`, required: false, description: `暗転の色を0xRRGGBB形式で指定します。デフォルトは黒。` },
      { name: `graphic`, required: false, description: `指定すると、暗転部分に画像を使用できます。画像はdata/imageフォルダに配置します。` },
      { name: `folder`, required: false, description: `graphicで指定するフォルダをimage以外に変更したい場合はこちらに記述します。bgimagefgimageなどを指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[mask time="" effect="" color="" graphic="" folder="" cond=""]`
  }],
  [`mask_off`, {
    name: `mask_off`,
    description: `スクリーンマスクを消去してゲームを再開します。`,
    params: [
      { name: `time`, required: false, description: `暗転が完了するまでの時間をミリ秒で指定できます。` },
      { name: `effect`, required: false, description: `暗転の効果を指定できます。以下のキーワードが指定できます。 fadeOutfadeOutDownBigfadeOutLeftBigfadeOutRightBigfadeOutUpBigflipOutXflipOutYlightSpeedOutrotateOutrotateOutDownLeftrotateOutDownRightrotateOutUpLeftrotateOutUpRightzoomOutzoomOutDownzoomOutLeftzoomOutRightzoomOutUpslideOutDownslideOutLeftslideOutRightslideOutUpbounceOut bounceOutDownbounceOutLeftbounceOutRightbounceOutUp` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[mask_off time="" effect="" cond=""]`
  }],
  [`message_config`, {
    name: `message_config`,
    description: `ティラノスクリプトV515以降。
メッセージに関連する詳細な設定を行えます。
省略した属性の設定は変更されません。`,
    params: [
      { name: `ch_speed_in_click`, required: false, description: `文字表示の途中でクリックされたあとの文字表示速度。1文字あたりの表示時間をミリ秒で指定します。 defaultと指定した場合はクリック前の文字表示速度を引き継ぐようになります。` },
      { name: `effect_speed_in_click`, required: false, description: `文字表示の途中でクリックされたあとの文字エフェクト速度。0.2s、200ms、あるいは単に200などで指定します。例はいずれも200ミリ秒となります。 defaultと指定した場合はクリック前の文字表示速度を引き継ぐようになります。` },
      { name: `edge_overlap_text`, required: false, description: `縁取りテキストの縁をひとつ前の文字に重ねるかどうか。trueまたはfalseで指定します。現状はedge_methodがstrokeの場合にのみ有効なパラメータです。` },
      { name: `speech_bracket_float`, required: false, description: `キャラのセリフの最初のカギカッコを左側に浮かして、開始カギカッコの下に文字が周りこまないようにするための設定です。trueを指定すると、開始カギカッコだけが左側にずれます。falseで無効。trueのかわりに20のような数値を指定することで、開始カギカッコを左側にずらす量を直接指定できます。` },
      { name: `speech_margin_left`, required: false, description: `speech_bracket_floatが有効のときに、さらにテキスト全体を右側に動かすことができます。trueで有効、falseで無効。20のように数値で直接指定することで全体を右側にずらす量を直接指定できます。` },
      { name: `kerning`, required: false, description: `字詰めを有効にするか。trueまたはfalseで指定します。フォント、もともとの字間設定、プレイヤーの使用ブラウザによっては効果が見られないこともあります。（高度な知識：CSSのfont-feature-settingsプロパティを設定する機能です）` },
      { name: `add_word_nobreak`, required: false, description: `ワードブレイク(単語の途中で自然改行される現象)を禁止する単語を追加できます。カンマ区切りで複数指定可能。` },
      { name: `remove_word_nobreak`, required: false, description: `一度追加したワードブレイク禁止単語を除外できます。カンマ区切りで複数指定可能。` },
      { name: `line_spacing`, required: false, description: `行間のサイズをpx単位で指定できます。` },
      { name: `letter_spacing`, required: false, description: `字間のサイズをpx単位で指定できます。` },
      { name: `control_line_break`, required: false, description: `禁則処理を手動で行なうかどうかをtrueまたはfalseで指定します。。や、などの特定の文字が行頭に来ていたとき、そのひとつ前の文字で改行するようにします。基本的にはこれを指定しなくても自動で禁則処理が行われますが、フォントの設定（エフェクトや縁取りなど）によっては禁則処理が自動で行われなくなることがあるので、その場合はこのパラメータにtrueを指定してみてください。` },
      { name: `control_line_break_chars`, required: false, description: `行頭に来ていたときに禁則処理を行なう文字をまとめて指定します。デフォルトでは、。）」』】,.)]が禁則処理の対象です。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[message_config ch_speed_in_click="" effect_speed_in_click="" edge_overlap_text="" speech_bracket_float="" speech_margin_left="" kerning="" add_word_nobreak="" remove_word_nobreak="" line_spacing="" letter_spacing="" control_line_break="" control_line_break_chars="" cond=""]`
  }],
  [`mode_effect`, {
    name: `mode_effect`,
    description: `次のタイミングで画面中央にエフェクトを出すことができます。`,
    params: [
      { name: `skip`, required: false, description: `スキップモード開始時に表示されるエフェクト。none、default、またはimageフォルダを基準とする画像ファイルの場所を指定します。noneだとエフェクトなし、defaultだとデフォルトのエフェクト、画像ファイルを指定するとその画像を出すことができます。` },
      { name: `auto`, required: false, description: `オートモード開始時に表示されるエフェクト。skipパラメータと同様に指定します。` },
      { name: `stop`, required: false, description: `スキップモードまたはオートモード停止時に表示されるエフェクト。skipパラメータと同様に指定します。` },
      { name: `holdskip`, required: false, description: `ホールドスキップモード開始時に表示されるエフェクト。skipパラメータと同様に指定します。` },
      { name: `holdstop`, required: false, description: `ホールドストップモード停止時に表示されるエフェクト。skipパラメータと同様に指定します。` },
      { name: `all`, required: false, description: `5種類のエフェクトをまとめて指定できます。skipパラメータと同様に指定します。` },
      { name: `env`, required: false, description: `allpcphoneのいずれかを指定します。pcを指定すると、プレイヤーがPCでゲームを遊んでいるとき限定のエフェクトを設定できます。phoneを指定すると、プレイヤーがスマホ・タブレットでゲームを遊んでいるとき限定のエフェクトを設定できます。all(デフォルト)の場合は2つの環境の設定をまとめて行います。` },
      { name: `width`, required: false, description: `エフェクトの横幅を指定したい場合、数値(px単位)を指定します。` },
      { name: `height`, required: false, description: `エフェクトの高さを指定したい場合、数値(px単位)を指定します。` },
      { name: `color`, required: false, description: `エフェクトにdefaultを使用する場合に、図形部分の色を指定できます。` },
      { name: `bgcolor`, required: false, description: `エフェクトにdefaultを使用する場合に、図形を囲む丸部分の色を指定できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[mode_effect skip="" auto="" stop="" holdskip="" holdstop="" all="" env="" width="" height="" color="" bgcolor="" cond=""]`
  }],
  [`movie`, {
    name: `movie`,
    description: `ゲーム画面上で動画を再生します。動画ファイルはdata/videoフォルダに配置します。`,
    params: [
      { name: `storage`, required: true, description: `再生する動画ファイルを指定します。` },
      { name: `skip`, required: false, description: `動画を途中でスキップできるようにするかどうか。trueまたはfalseで指定します。trueを指定すると、プレイヤーが画面クリックで動画を飛ばせるようになります。` },
      { name: `mute`, required: false, description: `動画の音をミュートするかどうか。trueまたはfalseで指定します。ブラウザ上では動画を再生する前にユーザアクション（タップなど）が必要という制限がありますが、trueを指定することでこの制限を無視できます。` },
      { name: `volume`, required: false, description: `動画の音量を0〜100で指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[movie storage="" skip="" mute="" volume="" cond=""]`
  }],
  [`mtext`, {
    name: `mtext`,
    description: `多彩な演出効果をもったテキストを画面上に表示します。`,
    params: [
      { name: `layer`, required: false, description: `対象とする前景レイヤを0以上の整数で指定します。` },
      { name: `page`, required: false, description: `レイヤの表ページと裏ページ、どちらを対象とするか。foreまたはbackで指定します。省略すると、表ページとみなされます。` },
      { name: `text`, required: false, description: `表示するテキストの内容を指定します。` },
      { name: `x`, required: true, description: `テキストの左端位置を指定します。（ピクセル）` },
      { name: `y`, required: true, description: `テキストの上端位置を指定します。（ピクセル）` },
      { name: `vertical`, required: false, description: `縦書きにするかどうか。trueまたはfalseで指定します。` },
      { name: `size`, required: false, description: `フォントサイズをピクセルで指定します。` },
      { name: `face`, required: false, description: `フォントの種類を指定します。Webフォントを使用する場合はtyrano/css/font.cssに定義を記述してください。` },
      { name: `color`, required: false, description: `フォントの色を0xRRGGBB形式で指定します。` },
      { name: `width`, required: false, description: `テキスト表示部分の横幅をピクセルで指定します。` },
      { name: `align`, required: false, description: `文字の横方向に関する位置を指定できます。同時にwidthパラメータを指定する必要があります。left(左寄せ)、center(中央寄せ)、right(右寄せ)` },
      { name: `name`, required: false, description: `[anim]タグなどからこの名前でアニメーションさせられます。カンマで区切ることで複数指定できます。（高度な知識：name属性で指定した値はHTMLのクラス属性になります）` },
      { name: `bold`, required: false, description: `太字にする場合はboldと指定します。` },
      { name: `edge`, required: false, description: `文字の縁取りを有効にできます。縁取り色を0xRRGGBB形式で指定します。` },
      { name: `shadow`, required: false, description: `文字に影をつけます。影の色を0xRRGGBB形式で指定します。縁取りをしている場合は無効化されます。` },
      { name: `fadeout`, required: false, description: `テキスト表示後にフェードアウトを実行するか否かをtrueまたはfalseで指定します。残った文字を消す場合は[freeimage]タグや[free]タグを使います。` },
      { name: `time`, required: false, description: `テキストが静止している時間をミリ秒で指定します。` },
      { name: `wait`, required: false, description: `アニメーションの完了を待つかどうか。trueまたはfalseを指定します。falseを指定すると、テキストの演出完了を待たずに次のタグに進みます。` },
      { name: `in_effect`, required: false, description: `文字が表示される際のアニメーション演出を指定します。` },
      { name: `in_delay`, required: false, description: `文字が表示される際の速度を指定します。何秒遅れて1文字が表示されるかをミリ秒で指定します。` },
      { name: `in_delay_scale`, required: false, description: `１文字にかかるアニメーションの比率を指定します。` },
      { name: `in_sync`, required: false, description: `trueを指定すると、すべての文字が同時にアニメーションを開始します。` },
      { name: `in_shuffle`, required: false, description: `trueを指定すると、文字アニメーションのタイミングがランダムに実行されます。` },
      { name: `in_reverse`, required: false, description: `trueを指定すると、文字が後ろから表示されていきます。"` },
      { name: `out_effect`, required: false, description: `文字が消える際のアニメーション演出を指定します。指定できるアニメーションは http://tyrano.jp/mtext/ を参照。` },
      { name: `out_delay`, required: false, description: `文字が消える際の速度を指定します。何秒遅れて1文字が消えるかをミリ秒で指定します。` },
      { name: `out_delay_scale`, required: false, description: `１文字にかかるアニメーションの比率を指定します。` },
      { name: `out_sync`, required: false, description: `trueを指定すると、すべての文字が同時にアニメーションを開始します。` },
      { name: `out_shuffle`, required: false, description: `trueを指定すると、文字アニメーションのタイミングがランダムに実行されます。` },
      { name: `out_reverse`, required: false, description: `trueを指定すると、文字が後ろから消えていきます。"` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[mtext layer="" page="" text="" x="" y="" vertical="" size="" face="" color="" width="" align="" name="" bold="" edge="" shadow="" fadeout="" time="" wait="" in_effect="" in_delay="" in_delay_scale="" in_sync="" in_shuffle="" in_reverse="" out_effect="" out_delay="" out_delay_scale="" out_sync="" out_shuffle="" out_reverse="" cond=""]`
  }],
  [`nolog`, {
    name: `nolog`,
    description: `このタグに到達すると、テキストがバックログに記録されなくなります。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[nolog cond=""]`
  }],
  [`nowait`, {
    name: `nowait`,
    description: `テキスト瞬間表示モードを開始します。このモード中は、テキスト全体が一瞬で表示されます。文字が1文字ずつ追加されていく処理（通常の処理）は行われません。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[nowait cond=""]`
  }],
  [`p`, {
    name: `p`,
    description: `プレイヤーのクリックを待ちます。
プレイヤーがクリックすると改ページされます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[p cond=""]`
  }],
  [`pausebgm`, {
    name: `pausebgm`,
    description: `現在再生中のBGMを一時停止できます。
少しあとに同じBGMの再生を再開する場合のみ使用してください。それ以外の場合は[stopbgm]での停止が適切です。`,
    params: [
      { name: `buf`, required: false, description: `スロットを指定できます。省略すると、全スロットの音声に対して処理が実行されます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[pausebgm buf="" cond=""]`
  }],
  [`pausese`, {
    name: `pausese`,
    description: `現在再生中のSEを一時停止できます。`,
    params: [
      { name: `buf`, required: false, description: `スロットを指定できます。省略すると、全スロットの音声に対して処理が実行されます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[pausese buf="" cond=""]`
  }],
  [`playbgm`, {
    name: `playbgm`,
    description: `BGMを再生します。再生する音声ファイルはdata/bgmフォルダに配置します。`,
    params: [
      { name: `storage`, required: true, description: `再生する音楽ファイルを指定します。` },
      { name: `loop`, required: false, description: `ループするかどうか。trueまたはfalseで指定します。` },
      { name: `sprite_time`, required: false, description: `再生する区間を指定できます。開始時刻と終了時刻をハイフン繋ぎでミリ秒単位で指定します。たとえば6000-10000と指定すると00:06～00:10の4秒間を再生します。loop属性がtrueの場合、この間をループ再生します。 V515以降：00:06-00:10のような分:秒区切りでも指定できるようになりました。必ず:を含めてください。` },
      { name: `volume`, required: false, description: `再生する音量を指定できます。0〜100の範囲で指定して下さい。` },
      { name: `html5`, required: false, description: `通常は指定しなくてOKです。HTML5 Audioを使う場合はtrue、Web Audio APIを使う場合はfalse(デフォルト)で指定します。` },
      { name: `pause`, required: false, description: `trueを指定するとタグ実行時にBGMを再生しません。[resumebgm]で再生できます` },
      { name: `seek`, required: false, description: `再生開始時間を設定できます。例えば4.5と指定すると4.5秒進んだ位置からBGMが再生されます` },
      { name: `restart`, required: false, description: `この[playbgm]で再生しようとしたBGMがすでに再生されていた場合の処理を設定できます。trueなら最初から再生し直し、falseなら無視となります。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[playbgm storage="" loop="" sprite_time="" volume="" html5="" pause="" seek="" restart="" cond=""]`
  }],
  [`playse`, {
    name: `playse`,
    description: `効果音を再生します。再生する音声ファイルはdata/soundフォルダに配置します。`,
    params: [
      { name: `storage`, required: true, description: `再生する音楽ファイルを指定します。` },
      { name: `buf`, required: false, description: `効果音を再生するスロットを指定できます。すでに指定スロットで再生中の効果音がある場合、その効果音は停止されます。` },
      { name: `loop`, required: false, description: `ループするかどうか。trueまたはfalseで指定します。` },
      { name: `sprite_time`, required: false, description: `再生する区間を指定できます。開始時刻と終了時刻をハイフン繋ぎでミリ秒単位で指定します。たとえば6000-10000と指定すると00:06～00:10の4秒間を再生します。loop属性がtrueの場合、この間をループ再生します。 V515以降：00:06-00:10のような分:秒区切りでも指定できるようになりました。必ず:を含めてください。` },
      { name: `clear`, required: false, description: `trueまたはfalse。trueを指定すると、他のスロットで再生中の効果音がある場合、そちらもすべて停止します。音声などはtrueが便利でしょう。` },
      { name: `volume`, required: false, description: `再生する音量を指定できます。0〜100の範囲で指定して下さい。` },
      { name: `html5`, required: false, description: `通常は指定しなくてOKです。HTML5 Audioを使う場合はtrue、Web Audio APIを使う場合はfalse(デフォルト)で指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[playse storage="" buf="" loop="" sprite_time="" clear="" volume="" html5="" cond=""]`
  }],
  [`plugin`, {
    name: `plugin`,
    description: `外部プラグインを読み込むことができます。
プラグインはdata/others/pluginフォルダに配置します。`,
    params: [
      { name: `name`, required: true, description: `読み込むプラグインの名前を指定します。プラグインはdata/others/pluginフォルダに配置します。` },
      { name: `storage`, required: false, description: `最初に読み込むシナリオファイルを変更できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[plugin name="" storage="" cond=""]`
  }],
  [`popopo`, {
    name: `popopo`,
    description: `テキストに合わせてポポポという電子音を流すことができます。`,
    params: [
      { name: `type`, required: false, description: `7つのキーワードsine/square/sawtooth/triangle/noise/file/noneのいずれかで指定します。順に、正弦波/矩形波/のこぎり波/三角波/ホワイトノイズ/音声ファイル再生/再生しない、を意味します。` },
      { name: `volume`, required: false, description: `音の大きさ。0～100の数値またはキーワードdefaultで指定します。defaultを指定すると、コンフィグのSE効果音量を参照します。` },
      { name: `time`, required: false, description: `ポポポ音の長さをミリ秒で指定します。typeがfileの場合は無意味。デフォルトは20。` },
      { name: `tailtime`, required: false, description: `ポポポ音のフェードアウト時間をミリ秒で指定します。typeがfileの場合は無意味。デフォルトは30。` },
      { name: `frequency`, required: false, description: `ポポポ音の音程。A/A+/B/B+/C/C+/D/D+/E/E+/F/F+/G/G+のいずれかのキーワードで指定します。それぞれラ/ラ♯/……/ソ/ソ♯を意味します。なお、typeがfileあるいはtypeがnoiseの場合は無意味。` },
      { name: `octave`, required: false, description: `音(オクターブ)の高さを整数で指定します。デフォルトは0。1増減させるごとに隣のオクターブに移動します。typeがfileあるいはtypeがnoiseの場合は無意味。` },
      { name: `samplerate`, required: false, description: `ポポポ音のサンプルレート。typeがnoiseの場合のみ機能します。初期値は44000。3000以上、192000以下でなければなりません。` },
      { name: `buf`, required: false, description: `typeがfileの場合のみ機能します。再生するスロットを整数で指定します。` },
      { name: `storage`, required: false, description: `type=fileの場合のみ機能します。再生する音声ファイル名を指定します。` },
      { name: `mode`, required: false, description: `everyone/intervalのどちらかのキーワードで指定します。順に、ポポポ音を文字毎に鳴らす/文字に関係なく一定の間隔で鳴らす、を意味します。デフォルトはeveryone。` },
      { name: `noplaychars`, required: false, description: `modeがeveryoneの場合のみ機能します。ポポポ音を鳴らさない文字を指定できます。デフォルトは"…・、。「」（）　 "。` },
      { name: `interval`, required: false, description: `modeがintervalの場合のみ機能します。ポポポ音を鳴らす間隔をミリ秒で指定します。デフォルトは80。` },
      { name: `chara`, required: false, description: `キャラクター名を指定できます。このキャラクターが話しているときだけ、ポポポ音を適用できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[popopo type="" volume="" time="" tailtime="" frequency="" octave="" samplerate="" buf="" storage="" mode="" noplaychars="" interval="" chara="" cond=""]`
  }],
  [`position`, {
    name: `position`,
    description: `メッセージウィンドウに対する様々な属性を指定します。
いずれの属性も、省略すれば設定は変更されません。`,
    params: [
      { name: `layer`, required: false, description: `対象とするメッセージレイヤを指定します。` },
      { name: `page`, required: false, description: `レイヤの表ページと裏ページ、どちらを対象とするか。foreまたはbackで指定します。省略すると、表ページとみなされます。` },
      { name: `left`, required: false, description: `メッセージウィンドウの左端位置を指定します。（ピクセル）` },
      { name: `top`, required: false, description: `メッセージウィンドウの上端位置を指定します。（ピクセル）` },
      { name: `width`, required: false, description: `メッセージウィンドウの横幅を指定します。（ピクセル）` },
      { name: `height`, required: false, description: `メッセージウィンドウの高さを指定します。（ピクセル）` },
      { name: `frame`, required: false, description: `メッセージウィンドウのフレーム画像として表示させる画像を指定します。 画像サイズはwidthとheight属性に準じて調整してください。margin属性で実際にメッセージが表示される箇所の調整も行いましょう。 noneと指定することで標準枠に戻すこともできます。` },
      { name: `color`, required: false, description: `メッセージウィンドウの表示色を0xRRGGBB形式で指定します。` },
      { name: `border_color`, required: false, description: `外枠の線が有効な場合の色を0xRRGGBB形式で指定します。border_size属性の指定が同時に必要です` },
      { name: `border_size`, required: false, description: `外枠の線が有効な場合の太さを指定します。0を指定すると外枠は表示されません。初期値は0です。` },
      { name: `opacity`, required: false, description: `メッセージウィンドウの不透明度を0～255の数値で指定します。0で完全に透明。（文字の不透明度や、レイヤ自体の不透明度ではありません）` },
      { name: `marginl`, required: false, description: `メッセージウィンドウの左余白を指定します。` },
      { name: `margint`, required: false, description: `メッセージウィンドウの上余白を指定します。` },
      { name: `marginr`, required: false, description: `メッセージウィンドウの右余白を指定します。` },
      { name: `marginb`, required: false, description: `メッセージウィンドウの下余白を指定します。` },
      { name: `margin`, required: false, description: `メッセージウィンドウの余白を一括で指定します。たとえば30と指定すると上下左右すべてに30pxの余白ができます。 カンマ区切りで方向ごとの余白を一括指定することもできます。上下,左右、上,左右,下、上,右,下,左のように指定できます（方向の部分は数値に変えてください）。` },
      { name: `radius`, required: false, description: `メッセージウィンドウの角の丸みを数値で指定します。例：10(控えめな角丸)、30(普通の角丸)、100(巨大な角丸)` },
      { name: `vertical`, required: false, description: `メッセージウィンドウを縦書きモードにするかどうか。trueまたはfalseで指定します。trueで縦書き、falseで横書き。` },
      { name: `visible`, required: false, description: `メッセージレイヤを表示状態にするかどうか。trueまたはfalseを指定すると、同時にメッセージレイヤの表示状態を操作できます。` },
      { name: `gradient`, required: false, description: `背景にグラデーションを適用することができます。CSSグラデーション形式で指定します。CSSグラデーションとは、たとえばlinear-gradient(45deg, red 0%, yellow 100%)のような形式です。 CSSグラデーションを簡単に作れるサイトがWeb上にいくつか存在しますので、「CSS グラデーション ジェネレーター」で検索してみてください。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[position layer="" page="" left="" top="" width="" height="" frame="" color="" border_color="" border_size="" opacity="" marginl="" margint="" marginr="" marginb="" margin="" radius="" vertical="" visible="" gradient="" cond=""]`
  }],
  [`position_filter`, {
    name: `position_filter`,
    description: `メッセージウィンドウの裏側にフィルター効果をかけることができます。
これによって、たとえばメッセージウィンドウをすりガラスのように見せることができます。`,
    params: [
      { name: `layer`, required: false, description: `対象とするメッセージレイヤを指定します。` },
      { name: `page`, required: false, description: `レイヤの表ページと裏ページ、どちらを対象とするか。foreまたはbackで指定します。省略すると、表ページとみなされます。` },
      { name: `remove`, required: false, description: `trueまたはfalse。trueを指定すると、フィルターを除去する処理を行います。` },
      { name: `grayscale`, required: false, description: `0(デフォルト)～100を指定することで、画像の表示をグレースケールに変換できます。` },
      { name: `sepia`, required: false, description: `0(デフォルト)～100を指定することで、画像の表示をセピア調に変換できます。` },
      { name: `saturate`, required: false, description: `0～100(デフォルト)を指定してあげることで、画像の表示の彩度（色の鮮やかさ）を変更できます。` },
      { name: `hue`, required: false, description: `0(デフォルト)～360を指定することで、画像の表示の色相を変更できます。` },
      { name: `invert`, required: false, description: `0(デフォルト)～100を指定することで、画像の表示の階調を反転させることができます。` },
      { name: `opacity`, required: false, description: `0～100(デフォルト)を指定することで、画像の表示の透過度を変更できます。` },
      { name: `brightness`, required: false, description: `100(デフォルト)を基準とする数値を指定することで、画像の明度を変更できます。0で真っ暗に、100以上の数値でより明るくなります。` },
      { name: `contrast`, required: false, description: `0～100(デフォルト)を指定することで、画像の表示のコントラストを変更できます。` },
      { name: `blur`, required: false, description: `0(デフォルト)～任意の値を指定することで、画像の表示をぼかすことができます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[position_filter layer="" page="" remove="" grayscale="" sepia="" saturate="" hue="" invert="" opacity="" brightness="" contrast="" blur="" cond=""]`
  }],
  [`preload`, {
    name: `preload`,
    description: `[preload]タグを使用することで、素材ファイル（画像や音楽）を事前に読み込むことができます。
実際に素材を使用する際に表示がスムーズになります。`,
    params: [
      { name: `storage`, required: true, description: `プリロードするファイルをフルパスで指定します。JavaScriptの配列を指定することもできます。` },
      { name: `wait`, required: false, description: `trueを指定すると、すべての読み込みが完了するまでゲームを停止します。trueにする場合は画面に「Now Loading」などと表示しておき、素材のロード中であることをプレイヤーに知らせるべきでしょう。` },
      { name: `single_use`, required: false, description: `音声ファイルを読み込む場合にのみ意味を持つパラメータです。true(デフォルト)を指定するとプリロードデータが使い捨てとなり、[playbgm]などでプリロードデータを一度使用した時点でプリロードデータが破棄されます（メモリを圧迫しないようにするため）。一度使ったあともプリロードデータを保持したい場合はfalseを指定してください。falseを指定した場合であっても[unload]タグを使うことでプリロードデータを明示的に破棄できます。` },
      { name: `name`, required: false, description: `音声ファイルを読み込む場合にのみ意味を持つパラメータです。たとえば"bgm"、"se"、"section1"などのグループ名を付けておくことで、あとで[unload]タグでデータを破棄する際に対象をまとめて指定できます。カンマ区切りで複数指定可。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[preload storage="" wait="" single_use="" name="" cond=""]`
  }],
  [`ptext`, {
    name: `ptext`,
    description: `前景レイヤにテキストを表示します。メッセージウィンドウのテキストとは別に画面上にテキストを出したいときに使用できます。`,
    params: [
      { name: `layer`, required: true, description: `対象とする前景レイヤを0以上の整数で指定します。` },
      { name: `page`, required: false, description: `レイヤの表ページと裏ページ、どちらを対象とするか。foreまたはbackで指定します。省略すると、表ページとみなされます。` },
      { name: `text`, required: false, description: `表示するテキストの内容。` },
      { name: `x`, required: true, description: `テキストの左端位置を指定します。（ピクセル）` },
      { name: `y`, required: true, description: `テキストの上端位置を指定します。（ピクセル）` },
      { name: `vertical`, required: false, description: `縦書きにするかどうか。trueまたはfalseで指定します。` },
      { name: `size`, required: false, description: `フォントサイズをピクセル単位で指定します。` },
      { name: `face`, required: false, description: `フォントの種類を指定します。非KAG互換ですが、ウェブフォントも使用できます。` },
      { name: `color`, required: false, description: `フォントの色を0xRRGGBB形式で指定します。` },
      { name: `bold`, required: false, description: `太字にする場合はboldと指定します。（このパラメータをCSSのfont-styleにセットします） V515以降：trueでも太字にできるようにしました。` },
      { name: `edge`, required: false, description: `文字の縁取りを有効にできます。縁取りする文字色を0xRRGGBB形式で指定します。 V515以降：縁取りの太さもあわせて指定できます。4px 0xFF0000のように、色の前に縁取りの太さをpx付きで記述します。太さと色は半角スペースで区切ってください。さらに4px 0xFF0000, 2px 0xFFFFFFのようにカンマ区切りで複数の縁取りを指定できます。` },
      { name: `shadow`, required: false, description: `文字に影をつけます。影の色を0xRRGGBB形式で指定します。縁取りをしている場合は無効化されます。` },
      { name: `name`, required: false, description: `[anim]タグなどからこの名前でアニメーションさせられます。カンマで区切ることで複数指定できます。（高度な知識：name属性で指定した値はHTMLのクラス属性になります）` },
      { name: `width`, required: false, description: `テキスト表示部分の横幅をピクセルで指定します。` },
      { name: `align`, required: false, description: `文字の横方向に関する位置を指定できます。widthパラメータを同時に指定する必要があります。left(左寄せ)、center(中央寄せ)、right（右寄せ)` },
      { name: `time`, required: false, description: `フェードイン時間をミリ秒単位で指定します。これを指定すると、画像が透明な状態から徐々に表示されていきます。省略すると、一瞬で表示されます。` },
      { name: `overwrite`, required: false, description: `上書きするかどうかをtrueまたはfalseで指定します。trueを指定すると、同じnameが指定されたテキストがすでに存在している場合に、新規テキストを追加するのではなく既存のテキストの内容を書き変える処理を行います。` },
      { name: `gradient`, required: false, description: `V515以降：文字にグラデーションを適用することができます。CSSのグラデーション関数を指定します。グラデーション関数とはlinear-gradient(45deg, red 0%, yellow 100%)のような文字列です。 グラデーション関数を簡単に作れるサイトがWeb上にいくつか存在しますので、「CSS グラデーション ジェネレーター」で検索してみてください。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[ptext layer="" page="" text="" x="" y="" vertical="" size="" face="" color="" bold="" edge="" shadow="" name="" width="" align="" time="" overwrite="" gradient="" cond=""]`
  }],
  [`pushlog`, {
    name: `pushlog`,
    description: `バックログに任意のテキストを追加できます。`,
    params: [
      { name: `text`, required: true, description: `バックログに追加するテキストを指定します。` },
      { name: `join`, required: false, description: `バックログを前のテキストに連結するかどうか。trueまたはfalseで指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[pushlog text="" join="" cond=""]`
  }],
  [`qr_config`, {
    name: `qr_config`,
    description: `QRコードの各種動作設定が可能です。`,
    params: [
      { name: `qrcode`, required: false, description: `QRコードを読み込んだときの動作を設定できます。 jump(ゲーム内移動のQRのみ反応) web(他サイトへのリンクだけ反応) define([qr_define]で定義したものだけに反応) all(すべてに反応) off(QRコードに反応しない)` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[qr_config qrcode="" cond=""]`
  }],
  [`qr_define`, {
    name: `qr_define`,
    description: `QRコードの特定のURLを[jump]に置き換えることができます。
例えば、モニュメントや商品についているQRコードをゲーム内のイベントに置き換える事ができます。`,
    params: [
      { name: `url`, required: true, description: `カメラを写したときに反応させるURLを定義します。` },
      { name: `storage`, required: false, description: `URLが読み込まれたときに発動するジャンプ先のシナリオファイルを指定します。` },
      { name: `target`, required: false, description: `ジャンプ先のラベルを指定します。` },
      { name: `clear`, required: false, description: `trueを指定すると定義を削除できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[qr_define url="" storage="" target="" clear="" cond=""]`
  }],
  [`quake`, {
    name: `quake`,
    description: `指定したミリ秒だけ、画面を揺らします。
vmax属性を0に設定すると横揺れに、hmax属性を0に設定すると縦揺れになります。`,
    params: [
      { name: `count`, required: false, description: `揺らす回数を指定します。` },
      { name: `wait`, required: false, description: `揺れの終了を待つかどうか。trueまたはfalseで指定します。` },
      { name: `time`, required: true, description: `１回揺れるのにかかる時間をミリ秒で指定します。` },
      { name: `hmax`, required: false, description: `揺れの横方向への最大振幅を指定します。` },
      { name: `vmax`, required: false, description: `揺れの縦方向への最大振幅を指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[quake count="" wait="" time="" hmax="" vmax="" cond=""]`
  }],
  [`quake2`, {
    name: `quake2`,
    description: `指定したミリ秒だけ画面を揺らします。`,
    params: [
      { name: `time`, required: false, description: `揺れ全体の時間をミリ秒で指定します。` },
      { name: `hmax`, required: false, description: `揺れの横方向への最大振幅を指定します。` },
      { name: `vmax`, required: false, description: `揺れの縦方向への最大振幅を指定します。` },
      { name: `wait`, required: false, description: `揺れの終了を待つかどうか。trueまたはfalseで指定します。` },
      { name: `copybase`, required: false, description: `trueを指定した場合、画面が揺れている間、ベースレイヤの背景のコピーが最後面に固定されます。これによって、たとえば画面が上に揺れた瞬間に下側にできる隙間から黒色がのぞくことがなくなります。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[quake2 time="" hmax="" vmax="" wait="" copybase="" cond=""]`
  }],
  [`r`, {
    name: `r`,
    description: `改行します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[r cond=""]`
  }],
  [`reset_camera`, {
    name: `reset_camera`,
    description: `カメラの位置を初期値に戻します。`,
    params: [
      { name: `time`, required: false, description: `カメラの移動時間をミリ秒で指定します。` },
      { name: `wait`, required: false, description: `カメラ移動の完了を待つかどうかをtrueまたはfalseで指定します。falseを指定するとカメラ移動中もゲームを進行できます。` },
      { name: `layer`, required: false, description: `カメラの効果を与えるレイヤを指定します。背景ならbase、前景レイヤなら0以上の数字。これを指定すると、カメラの影響を特定レイヤに限定できます。通常はすべてのレイヤに対して影響を及ぼします。` },
      { name: `ease_type`, required: false, description: `カメラの移動演出を指定できます。 ease(開始時点と終了時点を滑らかに再生する) linear(一定の速度で再生する) ease-in(開始時点をゆっくり再生する) ease-out(終了時点をゆっくり再生する) ease-in-out(開始時点と終了時点をゆっくり再生する)` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[reset_camera time="" wait="" layer="" ease_type="" cond=""]`
  }],
  [`resetdelay`, {
    name: `resetdelay`,
    description: `文字の表示速度をデフォルト速度に戻します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[resetdelay cond=""]`
  }],
  [`resetfont`, {
    name: `resetfont`,
    description: `テキストスタイルをもとに戻します。すなわち[deffont]で指定されたスタイルにリセットされます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[resetfont cond=""]`
  }],
  [`resumebgm`, {
    name: `resumebgm`,
    description: `[pausebgm]で停止していたBGM再生を再開できます。
一時停止中のオーディオを再開できます。`,
    params: [
      { name: `buf`, required: false, description: `スロットを指定できます。省略すると、全スロットの音声に対して処理が実行されます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[resumebgm buf="" cond=""]`
  }],
  [`resumese`, {
    name: `resumese`,
    description: `一時停止中のSEを再開できます。`,
    params: [
      { name: `buf`, required: false, description: `スロットを指定できます。省略すると、全スロットの音声に対して処理が実行されます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[resumese buf="" cond=""]`
  }],
  [`return`, {
    name: `return`,
    description: `サブルーチンから呼び出し元に戻ります。詳細は[call]の項目を参照してください。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[return cond=""]`
  }],
  [`rollback`, {
    name: `rollback`,
    description: `[checkpoint]タグを通過した場所にどこからでも戻ることができます。`,
    params: [
      { name: `checkpoint`, required: true, description: `チェックポイント名を指定します。` },
      { name: `variable_over`, required: false, description: `trueまたはfalseを指定します。trueを指定すると、ロールバック後に現在のゲーム変数を引き継ぎます。デフォルトはtrue` },
      { name: `bgm_over`, required: false, description: `trueまたはfalseを指定します。trueを指定すると、ロールバック後にBGMを引き継ぎます。デフォルトはfalse` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[rollback checkpoint="" variable_over="" bgm_over="" cond=""]`
  }],
  [`ruby`, {
    name: `ruby`,
    description: `次の一文字に対するルビを指定します。
ルビを表示させたい場合は毎回指定する必要があります。
複数の文字にルビを振る場合は、一文字毎にルビを指定する必要があります。`,
    params: [
      { name: `text`, required: true, description: `ルビとして表示させる文字を指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[ruby text="" cond=""]`
  }],
  [`s`, {
    name: `s`,
    description: `シナリオファイルの実行を停止します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[s cond=""]`
  }],
  [`save_img`, {
    name: `save_img`,
    description: `セーブデータのサムネイルに好きな画像を指定できます。`,
    params: [
      { name: `storage`, required: false, description: `サムネイルに設定したい画像ファイルを設定します。bgimageフォルダに配置してください。defaultを指定すると画面キャプチャに戻ります。` },
      { name: `folder`, required: false, description: `画像をbgimageフォルダ以外から取得したい場合は、ここに指定します。たとえばothersfgimageimageなど。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[save_img storage="" folder="" cond=""]`
  }],
  [`savesnap`, {
    name: `savesnap`,
    description: `現在のプレイ状況を一時保存します。その後、tyrano.ks拡張の[setsave]を行うことで、ここで記録したセーブデータが保存されます。`,
    params: [
      { name: `title`, required: true, description: `セーブデータのタイトルを指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[savesnap title="" cond=""]`
  }],
  [`screen_full`, {
    name: `screen_full`,
    description: `ゲーム画面をフルスクリーンにします。再度呼び出すことでフルスクリーンからウィンドウに戻ります。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[screen_full cond=""]`
  }],
  [`seopt`, {
    name: `seopt`,
    description: `SEの設定を変更できます。`,
    params: [
      { name: `volume`, required: false, description: `SEのコンフィグ音量を0〜100で指定できます。` },
      { name: `buf`, required: false, description: `設定を変更するスロットを指定できます。省略すると、全スロット共通の音量が設定されます。` },
      { name: `effect`, required: false, description: `コンフィグ音量の変更を現在再生中のSEに即反映するかどうか。trueまたはfalseで指定します。` },
      { name: `time`, required: false, description: `音量の変更を即反映する場合のフェード時間をミリ秒単位で指定できます。` },
      { name: `tag_volume`, required: false, description: `0〜100を指定して、現在再生中のSEのタグ音量を変更できます。タグ音量とは[playse]タグに指定されていた音量のことです。この機能はたとえば、もともと[playse volume="50"]で再生され始めたSEの音量を、[playse volume="100"]で再生されていた場合の音量に修正したい、というケースで使用可能です。これを指定しただけではコンフィグ音量は変更されません。これを指定すると、effectが強制的にtrueになります。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[seopt volume="" buf="" effect="" time="" tag_volume="" cond=""]`
  }],
  [`set_resizecall`, {
    name: `set_resizecall`,
    description: `プレイ端末の画面比率が入れ替わったタイミングでシナリオを呼び出すことができます。`,
    params: [
      { name: `storage`, required: true, description: `ジャンプ先のシナリオファイル名を指定します。省略すると、現在のシナリオファイルとみなされます。` },
      { name: `target`, required: false, description: `ジャンプ先のラベル名を指定します。省略すると、シナリオファイルの先頭にジャンプします。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[set_resizecall storage="" target="" cond=""]`
  }],
  [`showload`, {
    name: `showload`,
    description: `ロード画面を表示します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[showload cond=""]`
  }],
  [`showlog`, {
    name: `showlog`,
    description: `バックログを表示します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[showlog cond=""]`
  }],
  [`showmenu`, {
    name: `showmenu`,
    description: `メニュー画面を表示します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[showmenu cond=""]`
  }],
  [`showmenubutton`, {
    name: `showmenubutton`,
    description: `メニューボタンを表示します。`,
    params: [
      { name: `keyfocus`, required: false, description: `trueを指定すると、キーボードやゲームパッドで選択できるようになります。また1や2などの数値を指定すると、キーコンフィグのfocus_nextアクションでボタンを選択していくときの順序を指定できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[showmenubutton keyfocus="" cond=""]`
  }],
  [`showsave`, {
    name: `showsave`,
    description: `セーブ画面を表示します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[showsave cond=""]`
  }],
  [`skipstart`, {
    name: `skipstart`,
    description: `スキップモードを開始します。テキストが一瞬で表示されるようになります。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[skipstart cond=""]`
  }],
  [`skipstop`, {
    name: `skipstop`,
    description: `スキップモードを解除します。[cancelskip]と同じ動作。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[skipstop cond=""]`
  }],
  [`sleepgame`, {
    name: `sleepgame`,
    description: `このタグに到達した時点でゲームの状態を保存した上で、他のシナリオにジャンプできます。ジャンプ先で[awakegame]に到達するとゲームの状態が[sleepgame]時点に復帰します。`,
    params: [
      { name: `storage`, required: false, description: `ジャンプ先のシナリオファイル名を指定します。省略すると、現在のシナリオファイルとみなされます。` },
      { name: `target`, required: false, description: `ジャンプ先のラベル名を指定します。省略すると、シナリオファイルの先頭にジャンプします。` },
      { name: `next`, required: false, description: `trueまたはfalseを指定します。falseを指定すると[awakegame]で戻ってきたときに次のタグに進まなくなります。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[sleepgame storage="" target="" next="" cond=""]`
  }],
  [`speak_off`, {
    name: `speak_off`,
    description: `シナリオの読み上げをオフにします。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[speak_off cond=""]`
  }],
  [`speak_on`, {
    name: `speak_on`,
    description: `ストーリーのシナリオを音声で読み上げることができます。`,
    params: [
      { name: `volume`, required: false, description: `音量を0～100で指定します。` },
      { name: `pitch`, required: false, description: `声の高さを100を基準とする比率で指定します。指定した数値が大きいほど声が高くなります。` },
      { name: `rate`, required: false, description: `声の速度を100を基準とする比率で指定します。指定した数値が大きいほど早口になります。` },
      { name: `cancel`, required: false, description: `テキスト読み上げ中に次のテキスト読み上げが差し込まれた場合の動作を指定できます。trueを指定すると読み上げを中断して新しいテキストを読み上げます。falseを指定すると中断は行わず、読み上げが完了次第次のテキストを読み上げるようになります。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[speak_on volume="" pitch="" rate="" cancel="" cond=""]`
  }],
  [`start_keyconfig`, {
    name: `start_keyconfig`,
    description: `[stop_keyconfig]で無効化したキーコンフィグを有効化できます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[start_keyconfig cond=""]`
  }],
  [`stop_bgcamera`, {
    name: `stop_bgcamera`,
    description: `[bgcamera]を非表示にします。`,
    params: [
      { name: `time`, required: false, description: `ミリ秒で指定。動画をフェードアウトして削除することが可能です。` },
      { name: `wait`, required: false, description: `動画のフェードアウトを待つかどうかtrueまたはfalseを指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[stop_bgcamera time="" wait="" cond=""]`
  }],
  [`stop_bgmovie`, {
    name: `stop_bgmovie`,
    description: `bgmovieで再生した背景動画を停止します。`,
    params: [
      { name: `time`, required: false, description: `フェードアウト時間をミリ秒で指定します。` },
      { name: `wait`, required: false, description: `フェードアウト完了を待つかどうかをtrueまたはfalseで指定できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[stop_bgmovie time="" wait="" cond=""]`
  }],
  [`stop_kanim`, {
    name: `stop_kanim`,
    description: `キーフレームアニメーションを停止します。`,
    params: [
      { name: `name`, required: false, description: `アニメーションを停止する画像やテキストのnameを指定します。` },
      { name: `layer`, required: false, description: `nameを指定せずにlayerを指定することで、そのレイヤに存在するすべての要素のアニメーションを停止できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[stop_kanim name="" layer="" cond=""]`
  }],
  [`stop_keyconfig`, {
    name: `stop_keyconfig`,
    description: `キーコンフィグを一時的に無効化します。[start_keyconfig]で再び有効化できます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[stop_keyconfig cond=""]`
  }],
  [`stop_xanim`, {
    name: `stop_xanim`,
    description: `V515以降で使用可能。
[xanim]で開始したアニメーションを停止します。`,
    params: [
      { name: `name`, required: false, description: `アニメーションを停止する画像やテキストのnameを指定します。` },
      { name: `layer`, required: false, description: `nameを指定せずにlayerを指定することで、そのレイヤに存在するすべての要素のアニメーションを停止できます。` },
      { name: `complete`, required: false, description: `trueを指定すると、当初アニメーションするはずだった地点まで一瞬で移動させます。falseの場合はその場で止まります。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[stop_xanim name="" layer="" complete="" cond=""]`
  }],
  [`stopanim`, {
    name: `stopanim`,
    description: `実行中のアニメーションを強制的に停止します。`,
    params: [
      { name: `name`, required: true, description: `アニメーションを強制停止する要素のnameを指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[stopanim name="" cond=""]`
  }],
  [`stopbgm`, {
    name: `stopbgm`,
    description: `再生しているBGMの再生を停止します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[stopbgm cond=""]`
  }],
  [`stopse`, {
    name: `stopse`,
    description: `効果音を再生を停止します。`,
    params: [
      { name: `buf`, required: false, description: `効果音を停止するスロットを指定できます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[stopse buf="" cond=""]`
  }],
  [`sysview`, {
    name: `sysview`,
    description: `システム系機能で使用するHTMLファイルを変更できます。`,
    params: [
      { name: `type`, required: true, description: `saveloadbacklogmenuが指定可能です。` },
      { name: `storage`, required: true, description: `HTMLファイルのパスを指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[sysview type="" storage="" cond=""]`
  }],
  [`title`, {
    name: `title`,
    description: `ゲームタイトルを指定します。たとえば、章ごとにタイトルを変えるとプレイヤーがわかりやすくなります。`,
    params: [
      { name: `name`, required: true, description: `表示したいタイトルを指定します` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[title name="" cond=""]`
  }],
  [`trace`, {
    name: `trace`,
    description: `expパラメータで指定された式を評価し、結果をコンソールに出力します。`,
    params: [
      { name: `exp`, required: false, description: `評価するJS式を指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[trace exp="" cond=""]`
  }],
  [`trans`, {
    name: `trans`,
    description: `指定したレイヤでトランジションを行います。`,
    params: [
      { name: `layer`, required: true, description: `対象となるレイヤを指定します。baseを指定すると背景レイヤ、0以上の整数を指定すると前景レイヤ、message0やmessage1を指定するとメッセージレイヤを指定できます。messageとのみ指定した場合は、[current]タグで指定した現在の操作対象のメッセージレイヤが対象になります。（通常は背景の変更などに使用されます）` },
      { name: `time`, required: true, description: `トランジション時間をミリ秒で指定します。` },
      { name: `method`, required: false, description: `切り替えのタイプを指定します。デフォルトはfadeInです。指定できる演出は次の通りです。 【V450以降】fadeInfadeInDownfadeInLeftfadeInRightfadeInUplightSpeedInrotateInrotateInDownLeftrotateInDownRightrotateInUpLeftrotateInUpRightzoomInzoomInDownzoomInLeftzoomInRightzoomInUpslideInDownslideInLeftslideInRightslideInUpbounceIn bounceInDownbounceInLeftbounceInRightbounceInUprollInvanishInpuffIn 【V450以前】crossfadeexplodeslideblindbounceclipdropfoldpuffscaleshakesize` },
      { name: `children`, required: false, description: `【廃止】falseの場合、layerで指定した場所だけトランジションします。デフォルトはfalseです。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[trans layer="" time="" method="" children="" cond=""]`
  }],
  [`unload`, {
    name: `unload`,
    description: `[preload]タグにsingle_use="false"を指定したうえで多数の音声ファイルをプリロードしていると、音声プリロードデータがメモリを圧迫して動作に悪影響を及ぼすことがあります。`,
    params: [
      { name: `storage`, required: false, description: `破棄する音声プリロードデータの場所。[preload]に指定していたものを指定します。` },
      { name: `name`, required: false, description: `[preload]に指定したnameを使って対象をまとめて指定できます。` },
      { name: `all_sound`, required: false, description: `trueを指定すると、すべての音声プリロードデータを破棄します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[unload storage="" name="" all_sound="" cond=""]`
  }],
  [`vibrate`, {
    name: `vibrate`,
    description: `プレイヤーが使用しているモバイル端末やゲームパッドを振動させることができます。`,
    params: [
      { name: `time`, required: false, description: `振動させる時間(ミリ秒)。600,200,1000,200,600のようにカンマ区切りで複数の数値を指定すると、600ミリ秒振動→200ミリ秒静止→1000ミリ秒静止→…というパターンを指定することができます。` },
      { name: `power`, required: false, description: `振動させる強さ(0～100)。ゲームパッドを振動させるときのみ有効なパラメータです。` },
      { name: `count`, required: false, description: `振動を繰り返す回数。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[vibrate time="" power="" count="" cond=""]`
  }],
  [`vibrate_stop`, {
    name: `vibrate_stop`,
    description: `[vibrate]で開始したモバイル端末やゲームパッドの振動を途中で停止することができます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[vibrate_stop cond=""]`
  }],
  [`voconfig`, {
    name: `voconfig`,
    description: `ボイスを効率的に再生するための設定ができます。`,
    params: [
      { name: `sebuf`, required: false, description: `ボイスで使用する[playse]のbufを指定します。` },
      { name: `name`, required: false, description: `ボイスを再生するキャラクター名を指定します。[chara_new]タグのname。` },
      { name: `vostorage`, required: false, description: `音声ファイルとして使用するファイル名のテンプレートを指定します。{number}の部分には、再生されることに+1された数値が入っていきます。` },
      { name: `number`, required: false, description: `vostorageの{number}に当てはめる数値の初期値。` },
      { name: `waittime`, required: false, description: `オートモードにおいて、ボイスを再生し終わってから次のメッセージに進むまでに何ミリ秒待つか。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[voconfig sebuf="" name="" vostorage="" number="" waittime="" cond=""]`
  }],
  [`vostart`, {
    name: `vostart`,
    description: `[voconfig]で指定したボイスの自動再生を開始します。
これ以降、#で名前を指定したときに紐付いたボイスが再生されていきます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[vostart cond=""]`
  }],
  [`vostop`, {
    name: `vostop`,
    description: `[voconfig]で指定したボイスの自動再生を停止します。
これ以降、#で名前を指定してもボイスは再生されません。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[vostop cond=""]`
  }],
  [`wa`, {
    name: `wa`,
    description: `実行中のアニメーションすべて終了するまで処理を待ちます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[wa cond=""]`
  }],
  [`wait`, {
    name: `wait`,
    description: `ウェイトを入れます。time属性で指定した時間、操作できなくなります。`,
    params: [
      { name: `time`, required: true, description: `ウェイトをミリ秒で指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[wait time="" cond=""]`
  }],
  [`wait_bgmovie`, {
    name: `wait_bgmovie`,
    description: `再生中の背景ムービーの完了を待ちます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[wait_bgmovie cond=""]`
  }],
  [`wait_camera`, {
    name: `wait_camera`,
    description: `カメラが演出中である場合、その完了を待つことができます。wait=falseを指定した[camera]タグと組み合わせて使います。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[wait_camera cond=""]`
  }],
  [`wait_cancel`, {
    name: `wait_cancel`,
    description: `[wait]タグによるウェイト状態をキャンセルできます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[wait_cancel cond=""]`
  }],
  [`wait_preload`, {
    name: `wait_preload`,
    description: `[preload]タグをwait=falseで利用した後、何かの演出を挟んだ後、全てのpreloadが終わるのを待機します。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[wait_preload cond=""]`
  }],
  [`wbgm`, {
    name: `wbgm`,
    description: `BGMの再生完了を待ちます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[wbgm cond=""]`
  }],
  [`web`, {
    name: `web`,
    description: `指定したWebサイトをブラウザで開くことができます。`,
    params: [
      { name: `url`, required: true, description: `開きたいWebサイトのURLを指定します。ゲーム内の画像ファイルなどを開きたい場合、ファイルの場所をdataから初めて記述します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[web url="" cond=""]`
  }],
  [`wse`, {
    name: `wse`,
    description: `効果音の再生完了を待ちます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[wse cond=""]`
  }],
  [`wt`, {
    name: `wt`,
    description: `トランジションが終了するまで、待ちます。`,
    params: [
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[wt cond=""]`
  }],
  [`xanim`, {
    name: `xanim`,
    description: `V515以降で使用可能。`,
    params: [
      { name: `name`, required: false, description: `アニメーションさせる画像やテキストのnameを指定します。` },
      { name: `layer`, required: false, description: `nameを指定せずにlayerを指定することで、そのレイヤに存在するすべての要素をアニメーションさせることができます。` },
      { name: `keyframe`, required: false, description: `適用するキーフレームアニメーションのnameを指定します。` },
      { name: `time`, required: false, description: `アニメーション時間をミリ秒で指定します。` },
      { name: `easing`, required: false, description: `[anim]タグに指定できるキーワードと[kanim]に指定できるキーワードがすべて使用可能です。` },
      { name: `count`, required: false, description: `再生回数を指定できます。infiniteを指定することで無限ループさせることもできます。` },
      { name: `delay`, required: false, description: `開始までの時間を指定できます。初期値は0、つまり遅延なしです。` },
      { name: `direction`, required: false, description: `アニメーションを複数回ループさせる場合に、偶数回目のアニメーションを逆再生にするかを設定できます。偶数回目を逆再生にする場合はalternateを指定します。` },
      { name: `mode`, required: false, description: `アニメーションの最後のフレームの状態（位置、回転など）をアニメーション終了後も維持するかを設定できます。forwards(デフォルト)で維持。noneを指定すると、アニメーション再生前の状態に戻ります。` },
      { name: `svg`, required: false, description: `svgファイルを指定できます。svgファイルはimageフォルダに配置します。これを指定すると、svgファイル内で定義されたに沿ってアニメーションさせることができます。` },
      { name: `svg_x`, required: false, description: `svgファイルを指定したとき、X座標をに沿わせるかどうか。trueまたはfalseで指定します。` },
      { name: `svg_y`, required: false, description: `svgファイルを指定したとき、Y座標をに沿わせるかどうか。trueまたはfalseで指定します。` },
      { name: `svg_rotate`, required: false, description: `svgファイルを指定したとき、角度をに沿わせるかどうか。trueまたはfalseで指定します。` },
      { name: `wait`, required: false, description: `アニメーションの完了を待つかどうか。trueまたはfalseで指定します。 他: この他、[anim]タグに指定できるパラメータや、各種CSSプロパティをアニメーション対象にすることができます。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[xanim name="" layer="" keyframe="" time="" easing="" count="" delay="" direction="" mode="" svg="" svg_x="" svg_y="" svg_rotate="" wait="" 他="" cond=""]`
  }],
  [`xchgbgm`, {
    name: `xchgbgm`,
    description: `【非推奨】BGMを入れ替えます。音楽が交差して切り替わる演出に使用できます。`,
    params: [
      { name: `storage`, required: true, description: `次に再生するファイルを指定します。` },
      { name: `loop`, required: false, description: `ループするかどうか。trueまたはfalseで指定します。` },
      { name: `time`, required: false, description: `クロスフェードを行なっている時間をミリ秒で指定します。` },
      { name: `cond`, required: false, description: `JS式を記述して、その結果が真の場合のみタグが実行されます。` }
    ],
    body: `[xchgbgm storage="" loop="" time="" cond=""]`
  }]
]);

/** 全タグ名の配列 */
export const TAG_NAMES: string[] = Array.from(TAG_DATABASE.keys());
