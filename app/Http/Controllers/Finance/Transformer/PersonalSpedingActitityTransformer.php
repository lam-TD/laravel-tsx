<?php

namespace App\Http\Controllers\Finance\Transformer;

use League\Fractal\TransformerAbstract;

class PersonalSpedingActitityTransformer extends TransformerAbstract {
    public function transform($data) {
        return $data->toArray();
    }
}